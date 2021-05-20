var temptranscript =  {}
var result_input = ""
var out_nodes = {}
var current_node = ''
var array_data = []
var all_nodes = []
function AlekyaVoice(obj){
    var outnode = obj.nodename
    all_nodes.push(outnode)
    var check = "checked"
    array_data = obj.main
    var auto_correct_input = `<lable><input type='checkbox' ${check} class='auto-correct' onchange='toggle_auto_correct(this.title)' id='${outnode}_check'  title='${outnode}'> auto correct </lable>`
    if(!obj.auto_correct){
      obj.auto_correct = false
      check = ""
      auto_correct_input = ''
    }
    if(!obj.data_array){
      obj.data_array = []
    }
    out_nodes[outnode] = {"auto_correct" : obj.auto_correct ,"data_array" :  obj.data_array }
    result_input = "#" + outnode + "_result"
    var new_word = obj.new_word
    document.getElementById("output").innerHTML += `<div class='mx-auto' id="${outnode}_node" >
                                                        <div style='display:flex;flex-wrap:wrap; justify-content:center'>
                                                            <div style='width:250px;' >
                                                                    <lable>${outnode}</lable> <a href='javascript:void(0)' id='${outnode}_clear' onclick='clear_indi(this.id)'>clear</a>
                                                                    <input style='width:100%;'  class='form-control voiceInput' placeholder='${outnode}' type='text' id='${outnode}_result'>
                                                            </div>
                                                            <div id="${outnode}_options" >
                                                            <br />
                                                                <div class='options d-flex'>
                                                                <div> <button class=' m-0 mx-2 rounded-circle btn bg-info text-white px-3 py-2 ' title='${outnode}' onclick="start_recognition(this.title)" id="${outnode}_start"><i class="fas fa-microphone-alt"></i></button></div>
                                                                <div> <button class=' m-0 mx-2 rounded-circle btn bg-danger text-white px-3 none py-2 ' style='display:none' id='${outnode}_stop' title='${outnode}' onclick="stop_recognition(this.title)"><i class="fas fa-microphone"></i></button></div>
                                                                <div> ${auto_correct_input}</div>
                                                                  </div>
                                                            </div>
                                                        </div>
                                                    </div>`

}

function start_recognition(id){
  result_input =   id + "_result"
  current_node = id
  document.getElementById(id + "_start").style.display = "none"
  document.getElementById(id + "_stop").style.display = "block"

  readOutLoud(id)
  setTimeout(function(){
      voice_recognition.start()
  },800)
}
function stop_recognition(current_node){
  voice_recognition.stop()
    document.getElementById(current_node + "_start").style.display = "block"
  document.getElementById(current_node + "_stop").style.display = "none"
}
function clear_indi(id){
    var id = id.split("_", 1);
    document.getElementById(id + '_result').value = ''
   
}
var Speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var voice_recognition = new Speechrecognition();
      voice_recognition.onstart = () => {
        console.log("VOICE IS ACTIVATED...");
      };
    voice_recognition.onresult = function (event){
              const current = event.resultIndex;
            data = event.results[current][0].transcript.toLowerCase()
            document.getElementById(result_input).value = data
              document.getElementById(current_node + "_start").style.display = "block"
            document.getElementById(current_node + "_stop").style.display = "none"
    }
function readOutLoud(e) {
    var delay = e.split(" ").length * 400
    var t = new SpeechSynthesisUtterance();
    (t.text = e), (t.volume = 1), (t.rate = 1), (t.pitch = 1), window.speechSynthesis.speak(t);
}
