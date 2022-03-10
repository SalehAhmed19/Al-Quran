const url = 'http://api.alquran.cloud/v1/quran/en.asad';
fetch(url)
    .then(res => res.json())
    .then(data => displaySurah(data.data.surahs));
const url2 = 'http://api.alquran.cloud/v1/quran/quran-uthmani';
fetch(url2)
    .then(res => res.json())
    .then(data => showAyah(data.data.surahs));

const displaySurah = data => {
    const suraList = document.getElementById('surah-list');
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">English Name</th>
            <th scope="col">Arabic Name</th>
            <th scope="col">Meaning</th>
            <th scope="col">Revelation Type</th>
        </tr>
        `;
    suraList.appendChild(thead);
    for (sura of data) {
        // const li = document.createElement('li');
        // li.innerText = `${sura.englishName} ${sura.name}`;
        // suraList.appendChild(li);
        const tbody = document.createElement('tbody');
        tbody.innerHTML = `
        <tr>
            <th scope="row">${sura.number}</th>
            <td>${sura.englishName}</td>
            <td>${sura.name}</td>
            <td>${sura.englishNameTranslation}</td>
            <td>${sura.revelationType}</td>
        </tr>
        `;
        suraList.appendChild(tbody);
    }
}


// const showAyah = ayahs => {
//     const ayah = document.getElementById('ayah');
//     for (ayah of ayahs) {
//         const tbody = document.createElement('tbody');
//         for (ayah in ayahs[0]) {
//             tbody.innerHTML = `
//             <tr>
//                 <td class="col-2">${ayah.number}</td>
//                 <td class="col-10">${ayah.text}</td>
//             </tr>
//           `
//         }
//     }
// }



/* 
<div class="container rounded-3 bg">
            <h3 class="text-center p-5">Sura Al Fatiha</h3>
            <table class="table table-striped table-hover" id="ayah">

            </table>
        </div>
*/

/* 
<tr>
                <td class="col-2">${sura.englishName}</td>
                <td class="col-10">${sura.name}</td>
            </tr>
*/