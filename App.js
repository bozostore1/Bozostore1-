import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrGdou78u9tVnX9cXjbMQvaOSC-5Nomgg",
  authDomain: "mobil-store-b8cd9.firebaseapp.com",
  projectId: "mobil-store-b8cd9",
  storageBucket: "mobil-store-b8cd9.firebasestorage.app",
  messagingSenderId: "431503571629",
  appId: "1:431503571629:web:15132f526cf8aebc7fa424"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {
    const list = document.getElementById("product-list");
    const querySnapshot = await getDocs(collection(db, "Mobile-store"));
    
    list.innerHTML = ""; 
    
    querySnapshot.forEach((doc) => {
        const item = doc.data();
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${item.Mobile}</h3>
            <p>السعر: ${item.Price} جنيه</p>
        `;
        list.appendChild(div);
    });
}
loadProducts();
