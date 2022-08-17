// export function setPreStateToFilter(max, limitByPage=15){
//     let amountPages = max/limitByPage;
//     let paged = []
//     for ( let i=0; i<amountPages; i++ )
//         paged.push(i);
//     console.log("Paginas del filtro: ", amountPages);
//     return {
//         amountPages: amountPages,
//         paged: [...paged],
//         subPaged: [...paged.slice(0,10)]
//     };
// };

export function order( array, type, direction ){
    let arrayAux;
    switch(type){
        case 'weight':
            if( direction==='asc' )
                arrayAux = array.sort(function (a, b) {
                    if (a.weight > b.weight) return 1;
                    else if (a.weight < b.weight) return -1;
                    else return 0;
                });
            else
                arrayAux = array.sort(function (b, a) {
                    if (a.weight > b.weight) return 1;
                    else if (a.weight < b.weight) return -1;
                    else return 0;
                });
            break;
        case 'name':
            if( direction==='asc' )
                arrayAux = array.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    else return 0;
                });
            else
                arrayAux = array.sort(function (b, a) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    else return 0;
                });
            break;
        default:
            console.log('Error al ordernar...');break;
    };
    return arrayAux;
};