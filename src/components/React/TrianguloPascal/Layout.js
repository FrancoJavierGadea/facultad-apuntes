

export function LayoutTriangulo(opts = {}){

    const { triangulo, cellWidth = 50, cellHeight = 40, gap = 20 } = opts;

    //width maximo, el width de la ultima fila
    const width = triangulo.at(-1).length * (cellWidth + gap) - gap;

    //height maximo
    const height = triangulo.length * (cellHeight + gap) - gap;


    const layout = triangulo.map((row, i) => {

        const currentRowWidth = row.length * (cellWidth + gap) - gap;

        const rowX = (width / 2) - (currentRowWidth / 2);
        const rowY = (cellHeight + gap) * i + cellHeight;

        const cells = row.map((value, j) => {

            const x = rowX + (cellWidth + gap) * j   
            const y = rowY;

            return {
                name: `cell-${i}-${j}`,
                row: i,
                cell: j,
                width: cellWidth,
                height: cellHeight,
                x,
                y,
                value
            }
        })

        return {
            name: `row-${i}`,
            row: i,
            values: cells,
            width: currentRowWidth,
            height: cellHeight,
            x: rowX,
            y: rowY
        }
    });

    return layout;
}