
export const Navbar = ({setCategory}) => {
    return (
        <div>
            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><span className="badge bg-light text-dark">BytePress</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <div class="nav-link active" aria-current="page" href="#">Home</div>
                                </li>
                                <li class="nav-item">
                                    <div  class="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</div>
                                </li>
                                <li class="nav-item">
                                    <div  class="nav-link" href="#" onClick={()=>setCategory("business")}>Business</div>
                                </li>
                                <li class="nav-item">
                                    <div  class="nav-link" href="#" onClick={()=>setCategory("health")}>Health</div>
                                </li>
                                <li class="nav-item">
                                    <div  class="nav-link" href="#" onClick={()=>setCategory("sports")}>Sports</div>
                                </li> 
                                <li class="nav-item">
                                    <div  class="nav-link" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            
                        </div>
                    </div>
                </nav>
            </nav>
        </div >
    )
}


export default Navbar