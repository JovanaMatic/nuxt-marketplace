export const useHelpers = () => {
  const formatPrice = (num) => `$${Number(num).toLocaleString('en-US')}`

  return {
    formatPrice
  }
}