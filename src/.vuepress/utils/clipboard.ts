export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text || typeof window === "undefined") return false;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    // @ts-ignore
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}