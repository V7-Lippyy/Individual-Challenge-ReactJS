export default function formatToIDRCurrency(number) { 
  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);

  return formattedValue.replace("Rp", "Rp. ");
 }