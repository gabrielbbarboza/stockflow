// ══════════════════════════════════════════════
//  StockFlow | Serviço de Estoque Geral
// ══════════════════════════════════════════════

import {
    collection, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import { db } from "../config/firebase.js";


export function monitorarEstoque(callback) {
    return onSnapshot(collection(db, "estoque_geral"), callback);
}
