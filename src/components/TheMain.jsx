import style from "../css/modules/TheMain.module.css"

const TheMain = () => {
    return (
        <main className={style.main}>
            <div className={style.card}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png" alt="" className="w-full h-60 object-cover"/>
                <div className={style.cardContent}>
                    <h2>Titolo del Post</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum possimus optio incidunt fuga ullam, enim earum ex aspernatur ipsa porro dolorem aperiam, soluta libero deleniti. Dolores adipisci error est?</p>
                    <button className={style.cardButton}>LEGGI DI PIÙ</button>
                </div>
            </div>
        </main>
    )
}

export default TheMain