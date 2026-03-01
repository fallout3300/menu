import navListeners from "@/components/navbar/listeners";
import loadBtn from "@/listeners/buttons/loadBtn";
import saveBtn from "@/listeners/buttons/saveBtn";
import submitBtn from "@/listeners/buttons/submitBtn";
import submitListener from "@/listeners/submit";
import textareListener from "@/listeners/textarea";

export default function callListeners() {
    loadBtn()
    saveBtn()
    submitListener()
    submitBtn()
    textareListener()

    navListeners()
}