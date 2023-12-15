import React from 'react'
import Navbar from '../Components/Navbar'
import Video from './video.mp4'
function About() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='text-4xl text-center font-bold m-10'>This is About</h1>
                <div className='grid grid-cols-2 container m-auto border'>
                    <video src={Video}  autoPlay loop muted className='h-[750px] w-[750px]'></video>
                    <p className='text-justify text-lg font-semibold indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas itaque, dolor magnam voluptas voluptatibus? Vero sit expedita reprehenderit. Magni, inventore dolorem corporis deserunt quidem error harum sequi veritatis eligendi tempore velit quibusdam quae ea, unde, sunt obcaecati neque fugit dignissimos hic voluptas. Ut vero soluta, totam molestiae aliquid quos necessitatibus harum eum amet? Distinctio sit eum est quis? Nemo eaque blanditiis dolores sequi tempora deserunt ad maxime excepturi corrupti non, consequatur adipisci vero accusamus nesciunt eius dolore doloremque fugit officia sint sapiente quia eos inventore. Impedit numquam, doloremque dicta a atque vel eveniet necessitatibus accusantium rem odio modi mollitia cumque voluptas labore tenetur perspiciatis omnis nostrum error. Cumque, harum voluptas aliquam voluptatem iste blanditiis reiciendis corrupti odit eos consequatur distinctio quaerat est dolore ullam. Non, quaerat! Id aspernatur perspiciatis illo, nobis, quas necessitatibus nihil sint nemo error natus omnis laboriosam dolores quod repellendus animi delectus, expedita fugit assumenda ab a corrupti. Suscipit quia consequatur, provident quam excepturi iste! Aspernatur numquam autem aliquid voluptas magnam mollitia assumenda cumque. Commodi reiciendis eaque amet animi quod corporis eligendi omnis voluptate et doloribus iste beatae id facilis qui velit, repellat quasi veritatis necessitatibus ipsam eius dolor possimus quisquam expedita voluptates? Et, quibusdam animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sed id provident fuga facere eveniet tempora, soluta nobis temporibus quis repudiandae ut animi voluptatibus odio cupiditate unde nostrum aut ea expedita tenetur quo. Rem, corrupti reiciendis. Similique provident ducimus doloribus esse? Earum deleniti velit delectus animi impedit eos voluptas inventore? Amet, nesciunt. Voluptatibus tempore harum voluptates nulla officia neque voluptatem. Nam, sapiente nesciunt libero quibusdam repellat harum. Reiciendis ducimus consequuntur voluptate saepe repudiandae fugiat aliquid! Ipsum, at minima laudantium corrupti ut consectetur exercitationem adipisci harum quod, hic delectus distinctio itaque eos error recusandae non culpa mollitia iste. Ducimus, explicabo. At eum quibusdam quis atque vel ex nemo? Similique, eveniet ex.</p>
                </div>
            </div>
            {/* <ul className="flex">
        <li><Link className="link" to="/">Go to Home Page</Link></li>
        <li><Link className="link" to="/user/mark">Mark Page</Link></li>
        <li><Link className="link" to="/user/anil">anil Page</Link></li>
      </ul> */}
        </div>
    )
}

export default About
