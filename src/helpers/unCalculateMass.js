import { $table } from "@/components/table/consts"

export default function unCalculateMass() {
    $table.find('td').removeClass('on-total-nav')
}