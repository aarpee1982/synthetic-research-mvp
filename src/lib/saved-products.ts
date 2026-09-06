function productStore(key: string) {
  let memory = "[]";
  const event = `${key}-change`;
  return {
    read() { try { return localStorage.getItem(key) || memory; } catch { return memory; } },
    server() { return "[]"; },
    subscribe(notify: () => void) {
      window.addEventListener("storage", notify);
      window.addEventListener(event, notify);
      return () => { window.removeEventListener("storage", notify); window.removeEventListener(event, notify); };
    },
    write(ids: string[]) {
      memory = JSON.stringify(ids);
      try { localStorage.setItem(key, memory); } catch {}
      window.dispatchEvent(new Event(event));
    },
  };
}
export const shortlistStore = productStore("smr-shortlist");
export const bookmarkStore = productStore("smr-bookmarks");
