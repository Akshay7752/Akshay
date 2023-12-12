import React from 'react'
import Navbar from '../Components/Navbar'
import Image from './car.jpg'
function Product() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='text-4xl font-bold text-center m-10'>This is Product</h1>
                <div className='grid grid-cols-2 container m-auto border'>
                    <img className='' src={Image} alt=''></img>
                    <p className='text-justify text-lg font-semibold indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas itaque, dolor magnam voluptas voluptatibus? Vero sit expedita reprehenderit. Magni, inventore dolorem corporis deserunt quidem error harum sequi veritatis eligendi tempore velit quibusdam quae ea, unde, sunt obcaecati neque fugit dignissimos hic voluptas. Ut vero soluta, totam molestiae aliquid quos necessitatibus harum eum amet? Distinctio sit eum est quis? Nemo eaque blanditiis dolores sequi tempora deserunt ad maxime excepturi corrupti non, consequatur adipisci vero accusamus nesciunt eius dolore doloremque fugit officia sint sapiente quia eos inventore. Impedit numquam, doloremque dicta a atque vel eveniet necessitatibus accusantium rem odio modi mollitia cumque voluptas labore tenetur perspiciatis omnis nostrum error. Cumque, harum voluptas aliquam voluptatem iste blanditiis reiciendis corrupti odit eos consequatur distinctio quaerat est dolore ullam. Non, quaerat! Id aspernatur perspiciatis illo, nobis, quas necessitatibus nihil sint nemo error natus omnis laboriosam dolores quod repellendus animi delectus, expedita fugit assumenda ab a corrupti. Suscipit quia consequatur, provident quam excepturi iste! Aspernatur numquam autem aliquid voluptas magnam mollitia assumenda cumque. Commodi reiciendis eaque amet animi quod corporis eligendi omnis voluptate et doloribus iste beatae id facilis qui velit, repellat quasi veritatis necessitatibus ipsam eius dolor possimus quisquam expedita voluptates? Et, quibusdam animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, sequi a hic placeat corrupti veniam est repudiandae laborum nobis sed quo optio unde iste dolorum, ratione soluta. Nemo, similique? Vitae in nemo sint ipsam, qui tenetur veniam temporibus, consectetur maxime et voluptatibus. Deleniti, nostrum eum repellat dignissimos voluptates delectus eos enim inventore in consequuntur cumque placeat mollitia. Quasi distinctio deserunt eius dolore, libero minima mollitia sint accusantium sed, iure autem saepe nisi aliquam officiis magnam asperiores labore, consectetur aliquid fuga! Velit vitae nostrum mollitia quibusdam facilis dolor aspernatur exercitationem qui dicta assumenda rerum beatae corrupti, dolorem nobis cum. Reiciendis, sapiente quis quasi ullam magnam illo tenetur quidem animi ipsam neque!</p>
                </div>
            </div>
        </div>
    )
}

export default Product
