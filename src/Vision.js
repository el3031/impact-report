import React from 'react'
import './Vision.css'
import susie from './img/susie.jpeg'

function Vision()
{
    return(
        <div className="Vision section">
            <h2>Our Vision</h2>
            <div className="vision-body">
                <div className="text">
                    <p>As the COVID-19 pandemic shut down the world in 2020, a new mother named Aurea was desperately trying to feed Gianna, her newborn with a cleft. Gianna’s cleft made her choke on breast milk, and she was slowly wasting away. Despairing over her dying child but unable to leave quarantine, Aurea discovered Mision Caritas Felices (MCF), a cleft center nearby. </p>
                    <p>When Aurea called, life at MCF was rapidly changing. With in-person medical services suspended, the center had to rebuild its cleft program overnight. Fortunately, as a long-time Smile Train partner, they weren’t alone. With your support, MCF sent Aurea specialized feeding equipment and set up telehealth meetings so she could learn how to use it. Aurea also got connected with support groups and Gianna attended pre-surgical consultations. All remote, and totally free, thanks to your generosity. </p>
                    <p>However, a crucial part of cleft care couldn’t be remote: surgery. Even if they had the PPE they desperately lacked, hospitals still couldn't eliminate disease. In response, Smile Train and the World Federation of Societies of Anesthesiologists supported development of the world’s first COVID-19 Surgical Patient Checklist. With this checklist, MCF safely restarted surgeries, even while much of Latin America was still shut down. Thanks to your support, Gianna became one of their first patients to get a new smile.</p>
                </div>
                <figure className="image">
                    <img src={susie} />
                    <div className="caption">
                        <figcaption>Susannah Schaefer</figcaption>
                        <figcaption>President and Chief Executive Officer, Smile Train</figcaption>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default Vision;