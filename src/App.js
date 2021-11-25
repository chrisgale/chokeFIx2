import './css/App.css';
import {Wallet} from "./components/wallet";
import {BuyForm} from "./components/buyForm";

function App() {
  return (
    <div className="App" >
        <body className="d-flex flex-column custom-body">
        <main className="flex-shrink-0">


            <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4" style = {{color: "white"}}>Drake Land</h1>
                    <Wallet/>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-xl-5 py-lg-5">
                                    <div className="p-4 p-md-5">

                                        <h1><span id="main"></span><span>/10000</span></h1>
                                        <div className="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <BuyForm/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog" style={{background: "url('https://dummyimage.com/700x350/343a40/6c757d')"}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        </body>
        <p className="customFooter">@DrakeLand</p>
    </div>
  );
}

export default App;
