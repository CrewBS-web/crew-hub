# Вебхук Altegio → сайт: описание обработчика

Эндпоинт: `POST /api/webhooks/altegio` (`app/api/webhooks/altegio/route.ts`).

## Что принимает

JSON от Altegio вида `{ resource, status, data }`. Принимаются любые события,
но в работу берётся только одно: `resource = "record"`, `status = "create"`.
Остальные (`update`, `delete`, другие ресурсы) логируются и пропускаются.

## Что и куда отправляет

- **Meta Conversions API**, пиксель `1586412449667622`, событие `Schedule`
  (`lib/meta-conversions-api.ts`, Graph API v21.0, токен в
  `META_CONVERSIONS_API_ACCESS_TOKEN`). Других пикселей, CRM и систем нет.
- `user_data`: `external_id` (ID клиента), `ph`, `fn`, `ln`. Всё в SHA-256,
  открытых данных нет.
- `custom_data` (сумма, услуги, филиал), `fbc`/`fbp`, `value` сейчас **не**
  отправляются, это шаг 2.
- Дедупликация: `event_id = "rec_" + record_id`.

## Что изменено в этой версии (шаг 2, пункты 1–3)

1. Schedule уходит только для онлайн-записей: `data.online === true`.
   Записи администратора пропускаются.
2. Отмены и удаления (`update`/`delete`) Schedule не создают.
3. `event_id = "rec_<record_id>"` (раньше `altegio-record-<id>-create`).

## Логирование

Каждый входящий запрос пишется в лог (`[altegio-webhook] payload`) с
замаскированными персональными данными (имя, фамилия, телефон, email,
комментарий → `***`). Пропущенные события дополнительно:
`[altegio-webhook] skipped {resource, status, recordId, online, hasClient}`.

## Подпись запроса

Не проверяется: Altegio не подписывает вебхуки, эндпоинт открытый
(продуктовое решение, зафиксировано в коде). Риск: любой может прислать
поддельный `create`.

## Примеры данных

Вставить из логов после тестовых записей (онлайн, от администратора, отмена).
Поля `name/surname/phone/email/comment` уже маскируются автоматически.

### Онлайн-запись
Реальный payload, персональные данные заменены на `***`, лишние поля сокращены.
```json
{
  "company_id": 766546,
  "resource": "record",
  "resource_id": 675318050,
  "status": "create",
  "data": {
    "id": 675318050,
    "company_id": 766546,
    "staff_id": 2821392,
    "date": "2026-10-04 12:00:00",
    "comment": "***",
    "online": true,
    "attendance": 0,
    "confirmed": 1,
    "created_user_id": 0,
    "deleted": false,
    "api_id": "",
    "from_url": "",
    "bookform_id": 816066,
    "record_from": "\"форма компанії\" Online widget",
    "services": [{ "id": 0, "title": "Стрижка", "cost": 800, "amount": 1 }],
    "staff": { "id": 2821392, "name": "***" },
    "client": { "id": 0, "name": "***", "surname": "***", "phone": "***" },
    "datetime": "2026-10-04T12:00:00+03:00",
    "create_date": "2026-10-03T18:35:12+0300",
    "last_change_date": "2026-10-03T18:35:12+0300"
  }
}
```

Признаки онлайн-записи: `data.online === true`, `created_user_id === 0`,
`record_from` содержит «Online widget». Для фильтра используется `online`.

Важно: события `update` по онлайн-записям тоже приходят с `online: true`
(например, при подтверждении, смене статуса). Поэтому одного `online` мало:
Schedule отправляется только при `status === "create"`.

### Запись администратора
```json
TODO
```

### Отмена
```json
TODO
```
