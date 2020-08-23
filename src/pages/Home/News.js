import React from 'react'

export default function News() {
    return (
        
            <div id="news" className="container news">
                <div className="text-center pt-4">
                    <div className="news__title">
                        <h1>Tin Tức Và Sự Kiện</h1>
                        <span>Exclusive Holidays For Any Travelers</span>
                        <div className="news__title-line mt-4 mb-5" />
                    </div>
                </div>
                <div className="news__body mb-5">
                    <div className="news__content row mb-5">
                        <div className="news__img  col-md-5 col-sm-6 pr-4">
                            <img src="../img/home/news1.jpg" alt className="img-fluid" />
                        </div>
                        <div className="news__body-text col-md-7 col-sm-6">
                            <h5><a href="#">Ra mắt phim Mắt Biếc</a></h5>
                            <h6>21/08/2019</h6>
                            <p>Proin euismod vehicula vestibulum. Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas sed ipsum.Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas
                            sed ipsum.Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas sed ipsum.
        </p>
                        </div>
                    </div>
                    <div className="news__content row pb-5">
                        <div className="news__body-text  col-md-7 col-sm-6">
                            <h5><a href="#">FUSCE SCELERISQUE</a></h5>
                            <h6>5/01/2018</h6>
                            <p>Proin euismod vehicula vestibulum. Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas sed ipsum.Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas
                            sed ipsum.Fusce ullamcorper aliquet dolor id egestas. Nulla leo purus, facilisis non cursus ut, egestas sed ipsum.
        </p>
                        </div>
                        <div className="news__img col-md-5 col-sm-6">
                            <img src="../img/home/news2.jpg" alt className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
    )
}
