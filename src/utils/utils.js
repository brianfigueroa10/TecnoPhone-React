export const formatPrice = price => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(price);
};
export const formatDateAndTime = (isoDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-AR', options);
};
