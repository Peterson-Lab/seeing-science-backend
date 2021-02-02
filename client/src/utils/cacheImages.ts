export const cacheImages = async (srcArray: string[]): Promise<void> => {
  const promises = await srcArray.map((src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.src = src
      img.onload = resolve
      img.onerror = reject
    })
  })
  await Promise.all(promises)
}
