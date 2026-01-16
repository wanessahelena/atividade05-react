import tecladoImg from "../assets/teclado-mecanico.png";
import mouseImg from "../assets/mouse-gamer.png";
import headsetImg from "../assets/headset-gamer.png";
import ssdImg from "../assets/ssd-nvme-1tb.png";
import ramImg from "../assets/memoria-ram-16gb.png";
import gpuImg from "../assets/placa-video-rtx4060.png";
import speakerImg from "../assets/smart-speaker.png";
import cameraImg from "../assets/camera-wifi.png";
import hubImg from "../assets/hub-usbc.png";
import routerImg from "../assets/roteador-wifi6.png";

export const produtos = [
  {
    id: 1,
    nome: "Teclado Mecânico RGB",
    preco: 349.9,
    imagem: tecladoImg,
    estoque: 15,
  },
  {
    id: 2,
    nome: "Mouse Gamer 16000 DPI",
    preco: 199.9,
    imagem: mouseImg,
    estoque: 8,
  },
  {
    id: 3,
    nome: "Headset Gamer Surround",
    preco: 429.9,
    imagem: headsetImg,
    estoque: 0,
  },
  { id: 4, nome: "SSD NVMe 1TB", preco: 589.9, imagem: ssdImg, estoque: 22 },
  {
    id: 5,
    nome: "Memória RAM 16GB DDR4",
    preco: 319.9,
    imagem: ramImg,
    estoque: 12,
  },
  {
    id: 6,
    nome: "Placa de Vídeo RTX 4060",
    preco: 2399.9,
    imagem: gpuImg,
    estoque: 3,
  },
  {
    id: 7,
    nome: "Smart Speaker com Assistente",
    preco: 299.9,
    imagem: speakerImg,
    estoque: 0,
  },
  {
    id: 8,
    nome: "Câmera de Segurança Wi-Fi",
    preco: 189.9,
    imagem: cameraImg,
    estoque: 18,
  },
  {
    id: 9,
    nome: "Hub USB-C Multifuncional",
    preco: 149.9,
    imagem: hubImg,
    estoque: 25,
  },
  {
    id: 10,
    nome: "Roteador Wi-Fi 6",
    preco: 499.9,
    imagem: routerImg,
    estoque: 6,
  },
];
