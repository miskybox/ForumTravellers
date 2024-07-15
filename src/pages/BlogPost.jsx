// BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Carousel, Modal } from "react-bootstrap";
import "../styles/Blog.css";
import { useState } from "react";

const blogPosts = {
  "angkor-wat": {
    title: "Angkor Wat",
    subtitle: "A majestic temple complex in Cambodia",
    content:
      "Angkor Wat is one of the largest and most famous religious monuments in the world, located in Cambodia. Built in the 12th century, it is a symbol of the country and an architectural marvel with intricate reliefs and a fascinating history.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/SQwNfgB9/angkor-wat.jpg",
    additionalContent: {
      text: "Angkor Wat, a jewel of Khmer architecture, stands as the world's largest religious monument and an enduring testament to the ancient Khmer Empire. Located in Cambodia, this monumental complex was built in the 12th century under the reign of Suryavarman II, originally dedicated to the Hindu god Vishnu.\n\nIts architectural design is awe-inspiring, featuring a temple-mountain structure symbolizing Mount Meru, the home of the gods in Hindu mythology. Five lotus-shaped towers dominate the skyline, while intricate galleries and bas-reliefs narrate epic Hindu stories and scenes of daily life.\n\nAngkor Wat is renowned for its incredible detail and symmetry. The bas-reliefs adorning its walls depict battles, royal processions, and celestial deities, all carved with astonishing precision. Galleries are filled with sculpted pillars and ceilings adorned with floral and geometric motifs.\n\nOver the centuries, Angkor Wat has undergone changes in its religious function. By the late 12th century, it gradually transformed into a Buddhist temple, and today it remains an active place of worship for Cambodian Buddhists.\n\nVisiting Angkor Wat is like stepping back in time, immersing oneself in the rich history and spirituality of the ancient Khmer Empire. It is a place where architecture, art, and religion intertwine to create an unforgettable experience.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/bwhdVdNv/angkor-Wat-face.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/25H65wdq/ta-Prohm-tree.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/5Nctjjzm/angkor-Wat-cat.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },
  "zaanse-schans": {
    title: "Zaanse Schans",
    subtitle: "A picturesque neighborhood in the Netherlands",
    content:
      "Zaanse Schans is a charming area in the Netherlands known for its well-preserved windmills and traditional houses. It offers a glimpse into the country's industrial past and is a popular tourist destination for an authentic Dutch experience.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/CLbzfCnN/zaanse-schans.jpg",
    additionalContent: {
      text: "Additional text for Zaanse Schans.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },

  sardenya: {
    title: "Sardinia",
    subtitle: "The gem of the Mediterranean",
    content:
      "Sardinia, an Italian island in the Mediterranean, is known for its beautiful beaches, turquoise waters, and rich history. From ancient Nuragic ruins to modern coastal cities, it offers a unique blend of nature and culture.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/G38Bbnc6/sardenya.jpg",
    additionalContent: {
      text: "Additional text for Sardinia.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },
  petra: {
    title: "Petra",
    subtitle: "The rose city of the desert",
    content:
      "Petra, in Jordan, is an ancient city carved into rose-colored sandstone. Known as the 'Lost City,' its impressive structures and underground labyrinths make it one of the new Seven Wonders of the World.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/VvM0mvrs/petra.jpg",
    additionalContent: {
      text: "Additional text for Petra.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },
  "dead-sea": {
    title: "Dead Sea",
    subtitle: "Floating at the lowest point on Earth",
    content:
      "The Dead Sea, located between Israel and Jordan, is famous for its high salinity that allows swimmers to float effortlessly. Besides being a natural wonder, it holds historical significance and therapeutic properties.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/m2syhWbp/dead-sea.jpg",
    additionalContent: {
      text: "Additional text for Dead Sea.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },
  iceland: {
    title: "Iceland",
    subtitle: "Land of fire and ice",
    content:
      "Iceland is a land of natural extremes, from active volcanoes and geysers to glaciers and waterfalls. Its dramatic landscape and low population density make it an ideal destination for nature and adventure lovers.",
    footer: "Photo taken by SiGu",
    image: "https://i.postimg.cc/YCGrV9Vh/iceland.jpg",
    additionalContent: {
      text: "Additional text for Iceland.",
      polaroidImages: [
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 1",
          description: "Descripción corta 1",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 2",
          description: "Descripción corta 2",
        },
        {
          src: "https://i.postimg.cc/Y0VCfn6n/blue-lagoon-bambas-rojas.jpg",
          title: "Polaroid 3",
          description: "Descripción corta 3",
        },
      ],
    },
  },
  // Add more blog entries as needed
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts[postId];
  const [showModal, setShowModal] = useState(false);
  const [selectedPolaroid, setSelectedPolaroid] = useState(null);

  if (!post) {
    return <p>Blog post not found</p>;
  }

  const handlePolaroidClick = (polaroid) => {
    setSelectedPolaroid(polaroid);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPolaroid(null);
  };

  return (
    <Container className="my-5">
      <Card className="blog-post-card">
        <Card.Img variant="top" src={post.image} alt={post.title} />
        <Card.Body>
          <Card.Title className="blog-post-title">{post.title}</Card.Title>
          <Card.Subtitle className="blog-post-subtitle mb-2 text-muted">
            {post.subtitle}
          </Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
          {renderAdditionalContent(post, handlePolaroidClick)}
          <Card.Footer className="custom-footer text-muted text-center">
            <em>{post.footer}</em>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedPolaroid && (
            <div className="polaroid-card polaroid-card-modal">
              <img
                className="d-block w-100"
                src={selectedPolaroid.src}
                alt={selectedPolaroid.title}
              />
              <Carousel.Caption>
                {/* <h5>{selectedPolaroid.title}</h5>
                <p>{selectedPolaroid.description}</p> */}
              </Carousel.Caption>
              <div className="polaroid-card-footer">
                <p>{post.footer}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

function renderAdditionalContent(post, handlePolaroidClick) {
  if (post.additionalContent && post.additionalContent.polaroidImages) {
    const chunkedImages = chunkArray(post.additionalContent.polaroidImages, 3);
    return (
      <Carousel className="mt-4">
        {chunkedImages.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="polaroid-inner">
              {chunk.map((polaroid, idx) => (
                <div key={idx}>
                  <div
                    className="polaroid-card"
                    onClick={() => handlePolaroidClick(polaroid)}
                  >
                    <img
                      className="d-block w-100"
                      src={polaroid.src}
                      alt={polaroid.title}
                    />
                    <Carousel.Caption>
                      {/*   <h5>{polaroid.title}</h5>
                      <p>{polaroid.description}</p> */}
                    </Carousel.Caption>
                    <div className="polaroid-card-footer">
                      <p>{post.footer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  return null;
}

function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export default BlogPost;
