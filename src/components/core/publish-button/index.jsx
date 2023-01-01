"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

function PublishButton({ id }) {
  const router = useRouter();

  async function publishPost(id) {
    await fetch(`/api/publish/${id}`, { method: "PUT" });
    router.refresh();
  }

  return (
    <button className={styles.button} onClick={() => publishPost(id)}>
      Publish
    </button>
  );
}

export default PublishButton;
