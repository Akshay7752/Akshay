import React from 'react'
import Navbar from '../Components/Navbar'
import Image from './pexel-2.jpg'

function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='text-4xl font-bold text-center m-10'>This is HomePage</h1>
                <div className='grid grid-cols-2 container m-auto border'>
                    <img className='h-[750px]' src={Image} alt=''></img>
                    <p className='text-justify text-lg font-semibold indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas itaque, dolor magnam voluptas voluptatibus? Vero sit expedita reprehenderit. Magni, inventore dolorem corporis deserunt quidem error harum sequi veritatis eligendi tempore velit quibusdam quae ea, unde, sunt obcaecati neque fugit dignissimos hic voluptas. Ut vero soluta, totam molestiae aliquid quos necessitatibus harum eum amet? Distinctio sit eum est quis? Nemo eaque blanditiis dolores sequi tempora deserunt ad maxime excepturi corrupti non, consequatur adipisci vero accusamus nesciunt eius dolore doloremque fugit officia sint sapiente quia eos inventore. Impedit numquam, doloremque dicta a atque vel eveniet necessitatibus accusantium rem odio modi mollitia cumque voluptas labore tenetur perspiciatis omnis nostrum error. Cumque, harum voluptas aliquam voluptatem iste blanditiis reiciendis corrupti odit eos consequatur distinctio quaerat est dolore ullam. Non, quaerat! Id aspernatur perspiciatis illo, nobis, quas necessitatibus nihil sint nemo error natus omnis laboriosam dolores quod repellendus animi delectus, expedita fugit assumenda ab a corrupti. Suscipit quia consequatur, provident quam excepturi iste! Aspernatur numquam autem aliquid voluptas magnam mollitia assumenda cumque. Commodi reiciendis eaque amet animi quod corporis eligendi omnis voluptate et doloribus iste beatae id facilis qui velit, repellat quasi veritatis necessitatibus ipsam eius dolor possimus quisquam expedita voluptates? Et, quibusdam animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo, obcaecati maiores quo harum aliquid? Animi minus voluptatem, possimus id, officiis et autem doloribus fuga dolor atque fugiat dolorem ullam sit incidunt earum quisquam velit, omnis molestias eveniet neque sint corrupti nihil recusandae! Vel, consectetur odio rerum sapiente eveniet maxime ad accusantium nisi voluptatem? Consequatur odio inventore vel tenetur. Harum, perferendis dolorum nihil sapiente velit vero assumenda tenetur facere debitis, ducimus accusamus aspernatur repellendus necessitatibus, veniam explicabo? Quia, omnis ut eligendi nisi aliquid itaque. Voluptatibus libero, ipsam consequuntur atque perferendis ab quos vel? Adipisci, necessitatibus asperiores. Molestias error aut iste sequi facilis, cumque repudiandae veniam enim voluptatem obcaecati perferendis iusto!</p>
                </div>
            </div>
        </div>
    )
}

export default Home
