export const useHelpers = () => {
  const formatPrice = (num) => `$${Number(num).toLocaleString('en-US')}K`

  return {
    formatPrice
  }
}