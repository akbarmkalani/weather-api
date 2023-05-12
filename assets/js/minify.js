const _form=document.getElementById("searchBox");const _inp=document.querySelector(".searchBox>form>input"),_list=document.getElementById("list"),apiKey="edc228562ac0a8aa3116d41c0687cf56";function para(e){e.parentElement.remove()}function dateBuilder(e){let t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n;return`${t}, ${a} ${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getFullYear()}`}_form.addEventListener("submit",e=>{e.preventDefault(),temp=_inp.value;let t=`https://api.openweathermap.org/data/2.5/weather?q=${temp}&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric`;fetch(t).then(e=>e.json()).then(e=>{let t=new Date,a=dateBuilder(t);_list.innerHTML="";let n=document.createElement("li"),c=`${e.weather[0].description}`,r=`https://openweathermap.org/img/w/${e.weather[0].icon}.png"`;n.classList.add("col-12","col-md-6","col-lg-3","mx-3","mt-1","_liBox"),n.innerHTML=`
                <button class="closed" onclick="para(this)"><i class="bi bi-x-lg"></i></button>
                <span class="text-center d-flex mt-2">${a}</span>
                <h3 class="d-flex justify-content-between align-items-center">
                <span class="name col-6 mt-2">${e.name}</span>
                <span class="countery mt-2">${e.sys.country}</span>
                </h3>
                <h2 class="col-12 my-3 text-center ">${Math.round(e.main.temp)}\xb0c</h2>
               
                <figure class="d-flex justify-content-center">
                <img class="col-6 fs-2" src="${r}" alt="city">
               </figure>
                <p class="text-center">${c}</p>
                <span class="col-12 text-dark text-center d-flex p-3 justify-content-center ">${Math.round(e.main.temp_min)}\xb0c / ${Math.round(e.main.temp_max)}\xb0c</span>
         `,_list.appendChild(n),document.querySelector(".msg").innerText=""}).catch(()=>{document.querySelector(".msg").innerText="Search for a valid city"}),_inp.value=""});