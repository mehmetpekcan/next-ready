"use client";
import { useRouter } from "next/navigation";

function PublishButton({ id }) {
  const router = useRouter();

  async function publishPost(id) {
    await fetch(`/api/publish/${id}`, { method: "PUT" });
    router.refresh();
  }

  return <button onClick={() => publishPost(id)}>Publish</button>;
}

export default PublishButton;
