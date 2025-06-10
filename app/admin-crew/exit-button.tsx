import { Button } from "@/components/ui/button";
import { singOutUser } from "@/lib/actions/user.actions";

const ExitButton = () => {
  return (
    <form action={singOutUser}>
      <Button variant={"default"}>Вихід</Button>
    </form>
  );
};

export default ExitButton;
