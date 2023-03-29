import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ImageComponent from './components/ImageComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h2>Benvenuto nel sito</h2>
        <Button testoPulsante='Google' Link='https://www.google.it/'/>
        <Button testoPulsante='Youtube' Link='https://www.youtube.it/'/>
        <Button testoPulsante='Instagram' Link='https://www.instagram.it/'/>
        
          <h3>Questa è la sezione delle immagini</h3>
          <div id='container'>
          <ImageComponent LinkImmagine="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" AltImmagine="Foto gattino"/>
          <ImageComponent LinkImmagine="https://cdn.shopify.com/s/files/1/0376/6478/4520/articles/First_Kitten_Banner_968x.jpg?v=1639354876" AltImmagine="Foto gattino"/>
          <ImageComponent LinkImmagine="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" AltImmagine="Foto gattino"/>
          <ImageComponent LinkImmagine="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" AltImmagine="Foto gattino"/>
          <ImageComponent LinkImmagine="https://www.morrisanimalfoundation.org/sites/default/files/styles/article/public/2020-03/MBS_DogEvolution_blg_031820.jpg?h=b1512c13&itok=Cqx3F-nn" AltImmagine="Foto gattino"/>
          <ImageComponent LinkImmagine="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" AltImmagine="Foto gattino"/>
        </div>
      </main>
    </div>
  );
}

export default App;
