import { AdminCreateContainer } from "@/containers/admin-create-container";
import { getSession } from "@/lib/session";

async function CreatePage() {
  const { user } = await getSession();

  return (
    <AdminCreateContainer
      // TODO: make role base access control
      isEditor={user.email === "pekcanmehmett@gmail.com"}
    />
  );
}

export default CreatePage;
