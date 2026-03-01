import { getInputs } from "@/components/inputs/inputs";
import { $table } from "@/components/table/consts";
import { totalTable } from "@/helpers/calculateMass";

// get data from table
export default function getData() {
    const tableData = table.rows
    const totalData = totalTable.rows

    console.log(totalData)

    return {inputsData: getInputs(), tableData, totalData}
}

globalThis.getData = getData
