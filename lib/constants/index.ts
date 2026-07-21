export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "CREW — барбершопи Ужгорода, де є стиль";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "CREW — мережа чоловічих барбершопів. Стиль, сервіс і атмосфера. 4 локації в Ужгороді: заходь на свою.";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;
export const SERVICE_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1586412449667622";

export const signInDefaultValues = {
  email: "",
  password: ""
};
