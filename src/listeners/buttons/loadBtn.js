import $ from 'jquery'

import { loadGist } from "@/components/api/gist/gist"
import setData from "@/components/loadData/helpers/setData"
import playAnimation from "@/helpers/playAnimation"

export default function loadBtn() {
    $('#load-btn').click(function(event) {
        loadGist()
            .then(data => {
                setData(data)
                playAnimation($(this), 'succsess') 
            }) 
            .catch(error => {
                playAnimation($(this), 'error')
                console.error(error)
            })
    })
}