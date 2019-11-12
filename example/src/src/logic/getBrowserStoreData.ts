export default (storageType: Storage, storeName: string) => {
  const sessionStorageData = storageType.getItem(storeName);
  try {
    return sessionStorageData ? JSON.parse(sessionStorageData) : {};
  } catch {
    return {}
  }
}