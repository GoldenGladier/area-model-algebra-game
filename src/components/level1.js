import './css/level.css';
// IMPORTANDO COMPONENTES
// import ItemMenu from './itemMenu';

function Level() {
  return (
    <div className="Level">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Level 1</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Challenge 1 of 6</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                    Score: 
                        <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>  
                    </a>
                    </li>
                </ul>
                <button class="btn btn-outline-light" type="submit">Start Over</button>      
                </div>
            </div>
        </nav>

      <div className="content center-all">
            <div className="board-content container">
                <h1>Find the partial product.</h1>
            <div className="row"> 
                <div className="col-3 row">
                    <div class="col col-6">Linea</div>
                    <div class="col col-6"></div>                    
                </div>

                <div className="col-9">
                <div className="top-data-board">
                    <h2>x^2 -5x + 2</h2>
                    <div className="top-data-line row">
                        <div class="col col-5"></div>
                        <div class="col col-4"></div>
                        <div class="col col-3"></div>
                    </div>
                    <div className="top-data row">
                        <div class="col col-5">x^2</div>
                        <div class="col col-4">-5x</div>
                        <div class="col col-3">+ 2</div>
                    </div>
                </div>

   
                <div className="col-10 board row">
                    <div class="col col-5"></div>
                    <div class="col col-4"></div>
                    <div class="col col-3"></div>
                </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default Level;
