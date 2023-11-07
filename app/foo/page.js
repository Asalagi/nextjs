import Link from 'next/link';
import './styles.css';

function Page() {
    return (
    <div>
        <div className="main-content">
            <h1 className="title">Allie Salagi</h1> 
        <div className="outer-box">
            <div className="content-box">
                <div className="nav-bar">
                    <Link href="/foo" className="link"><button className="nav-btn">Home</button></Link>
                    <Link href="/foo/about" className="link"><button className="nav-btn">About</button></Link>
                    <Link href="/foo" className="link"><button className="nav-btn">Resume</button></Link>
                    <Link href="/foo" className="link"><button className="nav-btn">Blog</button></Link>
                    <Link href="/foo" className="link"><button className="nav-btn">Contact</button></Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc vel risus commodo viverra. At tellus at urna condimentum mattis pellentesque id nibh. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dictum non consectetur a erat nam at lectus urna duis. Enim eu turpis egestas pretium aenean pharetra magna ac. Facilisis sed odio morbi quis. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Scelerisque purus semper eget duis at tellus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Sed cras ornare arcu dui. Nunc congue nisi vitae suscipit tellus mauris a. Interdum velit euismod in pellentesque. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Iaculis eu non diam phasellus vestibulum lorem sed. Sem integer vitae justo eget magna fermentum iaculis.</p>
        <p>Tortor dignissim convallis aenean et tortor at risus viverra. Lacus luctus accumsan tortor posuere ac ut consequat. At volutpat diam ut venenatis tellus in metus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Molestie a iaculis at erat pellentesque adipiscing. Aenean pharetra magna ac placerat. Justo eget magna fermentum iaculis eu. Ornare lectus sit amet est placerat in egestas erat imperdiet. Eleifend mi in nulla posuere sollicitudin. Lacinia quis vel eros donec ac odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Augue mauris augue neque gravida in fermentum et. Nunc mi ipsum faucibus vitae aliquet. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Posuere morbi leo urna molestie at elementum eu facilisis. Quisque non tellus orci ac auctor augue. Tincidunt ornare massa eget egestas purus viverra accumsan.</p>
        <p>Ultrices dui sapien eget mi. Faucibus in ornare quam viverra orci sagittis. Sit amet nisl suscipit adipiscing bibendum est ultricies. In eu mi bibendum neque. Sit amet tellus cras adipiscing enim eu. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dignissim convallis aenean et tortor. Morbi enim nunc faucibus a. Augue neque gravida in fermentum et sollicitudin ac. Ut sem viverra aliquet eget sit amet tellus cras. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Blandit cursus risus at ultrices mi. Bibendum arcu vitae elementum curabitur. Habitant morbi tristique senectus et netus et. Vivamus at augue eget arcu.</p>
        <p>Elementum tempus egestas sed sed risus pretium quam. Id diam maecenas ultricies mi eget mauris pharetra et. Dictum fusce ut placerat orci. Dolor purus non enim praesent elementum. Ut eu sem integer vitae. Ipsum dolor sit amet consectetur adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Consequat semper viverra nam libero justo laoreet sit.</p>
        <p>Mauris augue neque gravida in. Volutpat blandit aliquam etiam erat velit scelerisque in. Elementum nisi quis eleifend quam adipiscing vitae proin. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Tincidunt lobortis feugiat vivamus at augue eget arcu. Consequat mauris nunc congue nisi vitae suscipit. Risus commodo viverra maecenas accumsan lacus vel facilisis. Vitae sapien pellentesque habitant morbi tristique. Parturient montes nascetur ridiculus mus. Mauris augue neque gravida in. Arcu dui vivamus arcu felis bibendum ut. Odio ut sem nulla pharetra. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Enim facilisis gravida neque convallis a cras. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Page;