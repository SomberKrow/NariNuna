const recoveryKey = "nari-chunk-recovery";

// One automatic attempt per tab/path until that document mounts successfully.
// If storage is unavailable, leave control with the visitor instead of looping.
export function attemptChunkRecovery(storage: Pick<Storage, "getItem" | "setItem">, path: string, reload: () => void): boolean {
  try {
    if (storage.getItem(recoveryKey) === path) return false;
    storage.setItem(recoveryKey, path);
  } catch {
    return false;
  }
  reload();
  return true;
}

export function clearChunkRecovery(storage: Pick<Storage, "removeItem">): void {
  try { storage.removeItem(recoveryKey); } catch { /* Storage is optional. */ }
}
