import MainLayout from './components/layouts/MainLayout';
import DocumentTitle from 'react-document-title';

function Service() {
  return (
  <MainLayout>
      <DocumentTitle title="บริการ" />
      <div>
          <div className='jumbotron pt-5'>
              <h1 className="display-6">บริการ</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga labore doloremque, totam non nesciunt asperiores veritatis dignissimos praesentium dolorum delectus iste expedita laboriosam aliquid autem enim culpa. At, aspernatur?
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eum mollitia, amet nostrum optio obcaecati autem nesciunt consequatur illum sunt totam ad rem vitae repellat eligendi natus animi fugiat ex!</p>
      </div>
  </MainLayout>
  )
}

export default Service;