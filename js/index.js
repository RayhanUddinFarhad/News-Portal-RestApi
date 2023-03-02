const loadCategory = async (category) => {


    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    showCategory(data.data.news_category)
}

const showCategory = (cats) => {

    const catContainer = document.getElementById('cat-container')
    const cat_name = document.getElementById('cat-name')


    cats.forEach(category => {


        catContainer.innerHTML += `


        <p onclick="loadNews('${category.category_id}', '${category.category_name}')">${category.category_name}</p>

        
        
        `





    })




}



const loadNews = async (id, category_name) => {

    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url)
    const data = await res.json()
    showNews(data.data, category_name)




}


const showNews = (news, category_name) => {

    const newsCotainer = document.getElementById('news-container')
    newsCotainer.innerHTML = '';



    const count = news.length;
    document.getElementById('item-count').innerHTML = count;
    document.getElementById('cat-name').innerText = category_name;


    news.forEach(newsItem => {

        newsCotainer.innerHTML += `


        <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img class = "w-60" src="${newsItem.image_url}" alt="Movie"/></figure>
        <div class="card-body p-20">
          <h2 class="card-title">${newsItem.title}</h2>
          <p>${newsItem.details.slice(0, 200)}</p>
          <div class="lg:flex mt-16 justify-between items-center">
            <div class="lg:flex items-center space-x-3">

                <img class="w-14" src="${newsItem.author.img}" alt="">

                <div>

                    <p>${newsItem.author.name}</p>
                    <p>${newsItem.author.published_date.slice(0, 10)}</p>
                </div>

                



            </div>

            <div class = "flex space-x-3">
            <img class="" src="images/carbon_view.png" alt="">

                <p class= "font-bold">${newsItem.total_view}</p>
            </div>


            <div>
                <img src="images/Group 116134.png" alt="">


            </div>

            <div>

           


                <label onclick="loadDetails('${newsItem._id}')" for="my-modal-3" class="btn"><img src="images/bi_arrow-right-short.png" alt=""></label>
            </div>


          </div>
          
        </div>
        
        
        
        `

    })









}



const loadDetails = async (id) => {

    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url)
    const data = await res.json()
    showDetails(data.data)





}

const showDetails = (getDetails) => {

    const modalContainer = document.getElementById('modal-container')
    const modal_title = document.getElementById('modal-title')
    const modal_des = document.getElementById('modal-des')
    const modal_image = document.getElementById('modal-image')




    getDetails.forEach((detail) => {

        modal_title.innerText = detail.title;
        modal_des.innerHTML = detail.details;
        modal_image.innerHTML = `

        <img src="${detail.thumbnail_url}" alt="">

        
        
        `







    })









}








loadDetails()





loadNews('01')




loadCategory()

