let gallery = [
    {
        file: "red.jpg",
        w: 300,
        title: "Красный костел",
        link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
        description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы." 
    },
    {
        file: "troi.jpg",
        w: 300,
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь." 
    },
    {
        file: "mir.jpg",
        w: 300,
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси" 
    },
] 

let s = "";
     for (i=0; i<gallery.length; i++) {
        s += `
        <div onclick="showPic('${gallery[i].file}','${gallery[i].description}')">
    <img width="${gallery[i].w}" src="images/${gallery[i].file}" alt="">
            <p><a href="${gallery[i].link}">${gallery[i].title}</a></p>
        </div> 
        `;
     }
     id1.innerHTML = s;

     function showPic(p,d) {
        id2.innerHTML = `
        <img onclick="id2.innerHTML =''" width="1000" src="images/${p}" alt="">
        <p>${d}</p> `;
     }

     let f = document.getElementById("id1");
     p1 = f.getElementsByTagName("p");
     a1 = f.getElementsByTagName("a");

     for (j=0; j<p1.length; j++) {
     p1[j].style.fontSize = "18pt";
     p1[j].style.textAlign = "center";
     a1[j].style.textDecoration = "none";
     a1[j].style.color = "blue";
    }