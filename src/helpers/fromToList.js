export default function fromToList(from, to) {
    let res = []
    for( let i = 0; i < globalThis.formData.days; i++) { 
        res.push(
            Math.round(
                from + (
                    (to - from) / globalThis.formData.days
                ) * (i)
            )
        ); 
    }
    return res
}
