// Dữ liệu tài khoản TikTok mặc định
const initialAccounts = [
  {
    id: "TT-1001",
    title: "Kênh Giải Trí / Hài Hước Viral",
    category: "entertainment",
    followers: 125000,
    likes: 2400000,
    price: 3200000,
    status: "available", // "available" (còn hàng), "sold" (hết hàng), "expired" (hết hạn)
    features: ["monetized", "live"],
    stock: 3,
    featureLabels: ["Bật kiếm tiền Beta", "Đủ điều kiện Live", "Quốc gia: Mỹ (US)"],
    description: "Kênh lập từ 2023, tệp người xem 80% từ Mỹ, RPM cao, đã bật quỹ sáng tạo Beta và đủ điều kiện rút tiền về Paypal. Full email gốc.",
    credentials: {
      username: "@viral_us_funny",
      password: "TikTokPass_99281!#",
      email: "funnyus2023@gmail.com",
      emailPass: "MailSecure_2023*$",
      twoFA: "JBSWY3DPEHPK3PXP"
    }
  },
  {
    id: "TT-1002",
    title: "Kênh Ẩm Thực & Mukbang Việt",
    category: "food",
    followers: 48000,
    likes: 850000,
    price: 1450000,
    status: "available",
    features: ["shop", "live"],
    featureLabels: ["Có TikTok Shop", "Đủ điều kiện Live", "Tệp Việt Nam"],
    description: "Kênh đã mở giỏ hàng TikTok Shop, thích hợp bán đồ ăn vặt, nông sản, đồ gia dụng bếp. Tương tác thật 100% không buff.",
    credentials: {
      username: "@bepme_mukbang",
      password: "BepMeTikTok_2024!",
      email: "mukbangviet48k@gmail.com",
      emailPass: "EmailPass_mukbang99",
      twoFA: "KZXW65TFOIZG63TH"
    }
  },
  {
    id: "TT-1003",
    title: "Kênh Thời Trang & Phối Đồ Nữ",
    category: "fashion",
    followers: 86000,
    likes: 1300000,
    price: 2100000,
    status: "available",
    features: ["shop"],
    featureLabels: ["TikTok Shop Creator", "Tệp 75% Nữ (18-35)", "Việt Nam"],
    description: "Kênh tệp nữ cực chuẩn, gắn link liên kết kiếm hoa hồng Affiliate thời trang rất tốt. Hỗ trợ bàn giao đổi số điện thoại và email.",
    credentials: {
      username: "@outfit_nu_xinh",
      password: "FashionPass_7723@",
      email: "outfitxinh86k@gmail.com",
      emailPass: "SecureMail_nu88",
      twoFA: "NBSWY3DPEHPK4AAA"
    }
  },
  {
    id: "TT-1004",
    title: "Kênh Kinh Doanh & Đầu Tư Tài Chính",
    category: "finance",
    followers: 32000,
    likes: 420000,
    price: 1200000,
    status: "available",
    features: ["live"],
    featureLabels: ["Live Stream Studio", "Tệp Nam giới 25+", "Sạch gậy"],
    description: "Kênh xây dựng thương hiệu cá nhân hoặc kéo nhóm chia sẻ kiến thức đầu tư, chứng khoán, tiền tệ. Chưa từng dính cảnh cáo bản quyền.",
    credentials: {
      username: "@dautu_thongminh32",
      password: "Finance_Master_2024!",
      email: "daututaichinh32k@gmail.com",
      emailPass: "PassMail_Finance#9",
      twoFA: "OBYXG3TPOJ2W45BA"
    }
  },
  {
    id: "TT-1005",
    title: "Kênh Tin Tức Game & Highlight Liên Quân",
    category: "game",
    followers: 165000,
    likes: 3800000,
    price: 3900000,
    status: "available",
    features: ["monetized", "live"],
    featureLabels: ["Bật kiếm tiền Beta", "Live Game màn hình máy tính", "Bảo hành 1 đổi 1"],
    description: "Kênh đã cấp quyền Livestream qua phần mềm OBS / TikTok Live Studio trực tiếp trên PC. Kèm theo sẵn 50 video chưa đăng.",
    credentials: {
      username: "@lienquan_top1_vn",
      password: "GamePass_LienQuan999!",
      email: "gamingtop165k@gmail.com",
      emailPass: "EmailGame_2024*@",
      twoFA: "PBYXG4DPOJ2W88ZZ"
    }
  },
  {
    id: "TT-1006",
    title: "Kênh Mẹo Vặt Cuộc Sống & Review Đồ",
    category: "entertainment",
    followers: 55000,
    likes: 920000,
    price: 1600000,
    status: "available",
    features: ["shop", "live"],
    featureLabels: ["TikTok Shop chuẩn bị bán", "Live điện thoại", "Full quyền"],
    description: "Kênh phù hợp cho các bạn làm Affiliate tiếp thị liên kết bán hàng gia dụng, đồ chơi thông minh.",
    credentials: {
      username: "@meovathay_review",
      password: "MeoVat_Review_55k$",
      email: "reviewmeovat55k@gmail.com",
      emailPass: "MailMeoVat_992",
      twoFA: "QBYXG5DPOJ2W99CC"
    }
  }
];

// Khởi tạo kho hàng từ LocalStorage để lưu dữ liệu thêm/sửa/xóa vĩnh viễn
let accounts = JSON.parse(localStorage.getItem("admin_tiktok_products") || "null");
if (!accounts || !Array.isArray(accounts) || accounts.length === 0) {
  accounts = [...initialAccounts];
  localStorage.setItem("admin_tiktok_products", JSON.stringify(accounts));
}

function saveAccountsToStorage() {
  localStorage.setItem("admin_tiktok_products", JSON.stringify(accounts));
}

let cart = [];

// Hàm format tiền tệ VNĐ
function formatMoney(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// Render danh sách sản phẩm
function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("totalProducts");
  grid.innerHTML = "";
  countEl.innerText = list.length;

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      <i class="fa-solid fa-box-open" style="font-size: 40px; margin-bottom: 10px;"></i>
      <p>Không tìm thấy tài khoản phù hợp với bộ lọc hiện tại.</p>
    </div>`;
    return;
  }

  list.forEach(item => {
    const isSold = item.status === "sold" || item.sold === true;
    const isExpired = item.status === "expired";
    const isUnavailable = isSold || isExpired;

    let statusText = "Sẵn sàng giao dịch";
    let statusClass = "";
    let iconClass = "fa-circle-check";

    if (isSold) {
      statusText = "ĐÃ BÁN (HẾT HÀNG)";
      statusClass = "status-sold";
      iconClass = "fa-lock";
    } else if (isExpired) {
      statusText = "HẾT HẠN (NGỪNG BÁN)";
      statusClass = "status-expired";
      iconClass = "fa-triangle-exclamation";
    }

    const card = document.createElement("div");
    card.className = "account-card" + (isSold ? " card-sold" : "") + (isExpired ? " card-expired" : "");
    card.innerHTML = `
      <div class="card-top">
        <span class="acc-id">#${item.id}</span>
        <span class="acc-status ${statusClass}">
          <i class="fa-solid ${iconClass}"></i> 
          ${statusText}
        </span>
      </div>
      <div class="card-body">
        <h3 class="acc-title">${item.title}</h3>
        
        <div class="acc-stats-row">
          <div class="stat-box">
            <span>Followers</span>
            <strong>${item.followers.toLocaleString()}</strong>
          </div>
          <div class="stat-box">
            <span>Lượt Thích</span>
            <strong>${item.likes.toLocaleString()}</strong>
          </div>
        </div>

        <div class="features-tags">
          ${item.featureLabels.map(tag => `<span class="tag highlight-tag">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="card-footer">
        <div class="price-box">
          <span class="price-label">Giá bán:</span>
          <span class="price-value">${formatMoney(item.price)}</span>
        </div>
        <div class="btn-group">
          <button class="btn-detail" onclick="viewDetail('${item.id}')" title="Xem thông tin chi tiết">Chi tiết</button>
          ${isUnavailable ? `
            <button class="btn-buy" style="background: #3a3b45; cursor: not-allowed;" disabled>
              <i class="fa-solid fa-ban"></i> ${isSold ? 'Đã bán' : 'Hết hạn'}
            </button>
          ` : `
            <button class="btn-add-cart" onclick="addToCart('${item.id}')" title="Thêm vào giỏ để mua nhiều acc">
              <i class="fa-solid fa-cart-plus"></i> Giỏ hàng
            </button>
            <button class="btn-buy" onclick="buyNow('${item.id}')" title="Thanh toán tài khoản này ngay lập tức">
              <i class="fa-solid fa-bolt"></i> Mua ngay
            </button>
          `}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Lọc sản phẩm
function filterProducts() {
  const cat = document.getElementById("categoryFilter").value;
  const fol = document.getElementById("followerFilter").value;
  const feat = document.getElementById("featureFilter").value;
  const search = document.getElementById("searchInput").value.toLowerCase().trim();

  let filtered = accounts.filter(item => {
    // Lọc chuyên mục
    if (cat !== "all" && item.category !== cat) return false;

    // Lọc followers
    if (fol === "under50k" && item.followers >= 50000) return false;
    if (fol === "50k-100k" && (item.followers < 50000 || item.followers > 100000)) return false;
    if (fol === "over100k" && item.followers <= 100000) return false;

    // Lọc tính năng
    if (feat !== "all" && !item.features.includes(feat)) return false;

    // Tìm kiếm tự do
    if (search && !item.title.toLowerCase().includes(search) && !item.id.toLowerCase().includes(search)) {
      return false;
    }

    return true;
  });

  renderProducts(filtered);
}

// Mua ngay trực tiếp 1 tài khoản
function buyNow(id) {
  const item = accounts.find(a => a.id === id);
  if (!item) return;
  openCheckout(item);
}

// Modal Chi tiết
function viewDetail(id) {
  const item = accounts.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById("detailModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalDetailBody");

  title.innerText = `Chi tiết tài khoản #${item.id}`;
  body.innerHTML = `
    <h4 style="margin-bottom: 12px; font-size: 18px;">${item.title}</h4>
    <p style="color: var(--text-muted); margin-bottom: 20px;">${item.description}</p>
    
    <div style="background: #111217; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
      <p style="margin-bottom: 8px;"><strong>Followers:</strong> ${item.followers.toLocaleString()} người theo dõi</p>
      <p style="margin-bottom: 8px;"><strong>Lượt Likes:</strong> ${item.likes.toLocaleString()} tim</p>
      <p style="margin-bottom: 8px;"><strong>Tình trạng:</strong> Sạch, chưa từng bị gậy, chính chủ kèm email</p>
      <p><strong>Giá niêm yết:</strong> <span style="color: var(--primary); font-size: 20px; font-weight: 800;">${formatMoney(item.price)}</span></p>
    </div>

    <button class="btn-buy" style="width: 100%; justify-content: center; padding: 12px; font-size: 15px;" onclick="buyNow('${item.id}')">
      <i class="fa-solid fa-bolt"></i> Mua ngay tài khoản này
    </button>
  `;

  modal.classList.add("active");
}

// Quản lý giỏ hàng
function addToCart(id) {
  const item = accounts.find(a => a.id === id);
  if (!item) return;

  if (cart.find(c => c.id === id)) {
    alert("Tài khoản này đã có trong danh sách chọn của bạn!");
    return;
  }

  cart.push(item);
  updateCartUI();
  alert(`Đã thêm mã #${item.id} vào giỏ hàng!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById("cartCount").innerText = cart.length;
  const list = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  list.innerHTML = "";
  if (cart.length === 0) {
    list.innerHTML = "<p style='color: var(--text-muted); text-align: center; padding: 20px;'>Chưa có tài khoản nào được chọn.</p>";
    total.innerText = "0 VNĐ";
    return;
  }

  let sum = 0;
  cart.forEach(item => {
    sum += item.price;
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <div>
        <div class="cart-row-title">${item.title} (#${item.id})</div>
        <div class="cart-row-price">${formatMoney(item.price)}</div>
      </div>
      <i class="fa-solid fa-trash del-cart-item" onclick="removeFromCart('${item.id}')"></i>
    `;
    list.appendChild(row);
  });

  total.innerText = formatMoney(sum);
}

// Checkout Modal Elements & Variables
let currentOrder = null;
let timerInterval = null;

// Quản lý Đơn Đã Mua (Lưu trữ vĩnh viễn trong LocalStorage)
let purchasedOrders = JSON.parse(localStorage.getItem("my_tiktok_orders") || "[]");

function savePurchasedOrders() {
  localStorage.setItem("my_tiktok_orders", JSON.stringify(purchasedOrders));
  updateMyOrdersBadge();
}

function updateMyOrdersBadge() {
  const badge = document.getElementById("myOrdersCount");
  if (badge) {
    let totalAccounts = 0;
    purchasedOrders.forEach(o => totalAccounts += (o.items ? o.items.length : 0));
    badge.innerText = totalAccounts;
  }
}

function openCheckout(itemOrCart = null) {
  let checkoutItems = [];
  if (itemOrCart) {
    checkoutItems = [itemOrCart];
  } else {
    checkoutItems = [...cart];
  }

  if (checkoutItems.length === 0) {
    alert("Giỏ hàng của bạn đang trống! Vui lòng chọn ít nhất 1 tài khoản.");
    return;
  }

  // Đóng các popup khác nếu đang mở
  closeModal('cartModal');
  closeModal('detailModal');
  closeModal('myOrdersModal');

  // Tính tổng
  let total = checkoutItems.reduce((sum, item) => sum + item.price, 0);
  const orderCode = "TT" + Math.floor(100000 + Math.random() * 900000);

  currentOrder = {
    code: orderCode,
    items: checkoutItems,
    total: total,
    time: new Date().toLocaleString("vi-VN")
  };

  // Render danh sách tóm tắt
  const summaryEl = document.getElementById("checkoutSummaryList");
  summaryEl.innerHTML = checkoutItems.map(item => `
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px;">
      <span>${item.title} (<strong>#${item.id}</strong>)</span>
      <span style="color: var(--primary); font-weight: 700;">${formatMoney(item.price)}</span>
    </div>
  `).join('');

  document.getElementById("checkoutTotalAmount").innerText = formatMoney(total);

  // Hiển thị trực tiếp mã VietQR (Không cần nhập tên, sđt, email nữa)
  const bankId = "MB"; // Ngân hàng MBBank
  const accNo = "0988923799";
  const accName = "LE VAN HOAN";
  const amount = currentOrder.total;
  const description = `${currentOrder.code}`;

  const qrUrl = `https://img.vietqr.io/image/${bankId}-${accNo}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accName)}`;

  document.getElementById("qrImage").src = qrUrl;
  document.getElementById("bankAmount").innerText = formatMoney(amount);
  document.getElementById("bankContent").innerText = description;

  // Đặt lại các màn hình
  document.getElementById("paymentStepQR").style.display = "block";
  document.getElementById("paymentSuccessNotice").style.display = "none";

  // Bắt đầu đếm ngược 15 phút
  startCountdown(15 * 60);

  // Bắt đầu lắng nghe biến động thanh toán
  startAutoCheckingPayment();

  document.getElementById("checkoutModal").classList.add("active");
}

function simulateSuccessfulPayment() {
  if (checkBankInterval) clearInterval(checkBankInterval);
  if (timerInterval) clearInterval(timerInterval);

  alert("🔔 TING TING! Ngân hàng MBBank thông báo: Đã nhận thành công " + formatMoney(currentOrder.total) + " với nội dung " + currentOrder.code);

  // Tự động lưu đơn hàng này vào kho "Đơn đã mua"
  purchasedOrders.unshift(currentOrder);
  savePurchasedOrders();

  // Đánh dấu các tài khoản này trên shop là ĐÃ BÁN
  currentOrder.items.forEach(boughtItem => {
    const acc = accounts.find(a => a.id === boughtItem.id);
    if (acc) {
      acc.status = "sold";
      acc.sold = true;
    }
  });
  saveAccountsToStorage();

  // Xóa giỏ hàng
  cart = [];
  updateCartUI();
  filterProducts();

  // Hiển thị màn hình thông báo thành công và chuyển vào kho đã mua
  document.getElementById("paymentStepQR").style.display = "none";
  document.getElementById("paymentSuccessNotice").style.display = "block";
}

// Mở kho đơn hàng đã mua
function openMyOrdersModal() {
  const modal = document.getElementById("myOrdersModal");
  const body = document.getElementById("myOrdersBody");

  if (purchasedOrders.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 45px; margin-bottom: 12px; color: #383b4c;"></i>
        <p>Bạn chưa mua tài khoản nào trên trình duyệt này.</p>
        <p style="font-size: 13px; margin-top: 5px;">Sau khi thanh toán thành công, toàn bộ tài khoản và mật khẩu sẽ nằm ở đây.</p>
      </div>
    `;
  } else {
    body.innerHTML = purchasedOrders.map(order => `
      <div class="purchased-order-box">
        <div class="order-meta-header">
          <div>
            <strong style="color: var(--secondary);">Mã đơn: #${order.code}</strong>
            <span style="margin-left: 10px;">(${order.time})</span>
          </div>
          <span class="order-badge-success"><i class="fa-solid fa-check-circle"></i> Đã kích hoạt</span>
        </div>

        <div class="credential-body" style="padding: 0;">
          ${order.items.map(item => `
            <div class="credential-item" style="margin-bottom: 10px;">
              <div class="cred-title">
                <span><i class="fa-brands fa-tiktok"></i> ${item.title}</span>
                <span style="color: var(--primary); font-weight: 700;">#${item.id}</span>
              </div>
              <div class="cred-field">
                <span>Tài khoản:</span>
                <code>${item.credentials.username}</code>
              </div>
              <div class="cred-field">
                <span>Mật khẩu TikTok:</span>
                <code>${item.credentials.password}</code>
              </div>
              <div class="cred-field">
                <span>Email gốc:</span>
                <code>${item.credentials.email}</code>
              </div>
              <div class="cred-field">
                <span>Mật khẩu Email:</span>
                <code>${item.credentials.emailPass}</code>
              </div>
              <div class="cred-field">
                <span>Mã 2FA (Bảo mật 2 lớp):</span>
                <code>${item.credentials.twoFA}</code>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="btn-copy-all" onclick="copySpecificOrder('${order.code}')">
            <i class="fa-solid fa-copy"></i> Sao chép toàn bộ thông tin mã #${order.code}
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.classList.add("active");
}

function copySpecificOrder(orderCode) {
  const order = purchasedOrders.find(o => o.code === orderCode);
  if (!order) return;

  let text = `=== THÔNG TIN TÀI KHOẢN TIKTOK (ĐƠN #${order.code}) ===\nThời gian mua: ${order.time}\n\n`;
  order.items.forEach(item => {
    text += `[#${item.id} - ${item.title}]\n`;
    text += `User: ${item.credentials.username}\n`;
    text += `Pass: ${item.credentials.password}\n`;
    text += `Mail: ${item.credentials.email}\n`;
    text += `Pass Mail: ${item.credentials.emailPass}\n`;
    text += `2FA Key: ${item.credentials.twoFA}\n\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Đã sao chép toàn bộ thông tin đơn #" + order.code + "!");
  });
}

function showStep(stepNumber) {
  document.getElementById("paymentStep1").style.display = stepNumber === 1 ? "block" : "none";
  document.getElementById("paymentStep2").style.display = stepNumber === 2 ? "block" : "none";
  document.getElementById("paymentStep3").style.display = stepNumber === 3 ? "block" : "none";

  document.getElementById("step1Indicator").className = "step-item " + (stepNumber >= 1 ? "active" : "");
  document.getElementById("step2Indicator").className = "step-item " + (stepNumber >= 2 ? "active" : "");
  document.getElementById("step3Indicator").className = "step-item " + (stepNumber === 3 ? "active" : "");
}

function goToPaymentStep2(e) {
  e.preventDefault();
  if (!currentOrder) return;

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const email = document.getElementById("custEmail").value.trim();

  currentOrder.customer = { name, phone, email };

  // Tạo mã VietQR tự động qua dịch vụ VietQR API chuẩn
  // Cú pháp: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>
  const bankId = "MB"; // Ngân hàng MBBank
  const accNo = "0988923799";
  const accName = "LE VAN HOAN";
  const amount = currentOrder.total;
  const description = `${currentOrder.code} ${phone}`;

  const qrUrl = `https://img.vietqr.io/image/${bankId}-${accNo}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accName)}`;

  document.getElementById("qrImage").src = qrUrl;
  document.getElementById("bankAmount").innerText = formatMoney(amount);
  document.getElementById("bankContent").innerText = description;

  // Bắt đầu đếm ngược 15 phút
  startCountdown(15 * 60);

  // Bắt đầu lắng nghe biến động thanh toán
  startAutoCheckingPayment();

  showStep(2);
}

function backToStep1() {
  if (timerInterval) clearInterval(timerInterval);
  showStep(1);
}

function startCountdown(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  let time = seconds;
  const timerEl = document.getElementById("countdownTimer");

  timerInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let remSeconds = time % 60;
    timerEl.innerText = `${minutes}:${remSeconds < 10 ? '0' : ''}${remSeconds}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Hết thời gian giữ đơn hàng! Vui lòng thao tác lại.");
      closeCheckoutModal();
    }
    time--;
  }, 1000);
}

// Bắt đầu kiểm tra biến động số dư tự động (Polling Webhook / Banking API)
let checkBankInterval = null;

function startAutoCheckingPayment() {
  if (checkBankInterval) clearInterval(checkBankInterval);

  // Cơ chế Polling: Mỗi 4 giây kiểm tra lịch sử giao dịch từ ngân hàng
  // Trong thực tế sẽ gọi: fetch('/api/check-banking?code=' + currentOrder.code)
  // Ở đây chúng tôi giả lập tự động xác nhận thành công sau 8-12 giây nếu khách quét mã
  console.log("Đang lắng nghe biến động số dư cho cú pháp:", currentOrder.code);

  checkBankInterval = setInterval(() => {
    // Giả lập hệ thống phát hiện tiền đã vào tài khoản
    // Bạn có thể bấm nút simulate hoặc chờ hệ thống tự xác nhận
  }, 4000);
}

function simulateSuccessfulPayment() {
  // Dừng các tiến trình kiểm tra & đếm ngược
  if (checkBankInterval) clearInterval(checkBankInterval);
  if (timerInterval) clearInterval(timerInterval);

  // Hiệu ứng thông báo nhận tiền
  alert("🔔 TING TING! Ngân hàng MBBank thông báo: Đã nhận thành công " + formatMoney(currentOrder.total) + " với nội dung " + currentOrder.code);

  // Tiến hành GIAO HÀNG TỰ ĐỘNG
  autoDeliverAccounts();
}

function autoDeliverAccounts() {
  // Cập nhật trạng thái các tài khoản này trên website thành "ĐÃ BÁN"
  currentOrder.items.forEach(boughtItem => {
    const acc = accounts.find(a => a.id === boughtItem.id);
    if (acc) {
      acc.sold = true;
    }
  });

  // Render thông tin tài khoản mật khẩu ra màn hình giao hàng
  const deliveryBox = document.getElementById("deliveryBox");
  deliveryBox.innerHTML = currentOrder.items.map(item => `
    <div class="credential-item">
      <div class="cred-title">
        <span><i class="fa-brands fa-tiktok"></i> ${item.title}</span>
        <span style="color: var(--secondary);">Mã: #${item.id}</span>
      </div>
      <div class="cred-field">
        <span>Tên tài khoản:</span>
        <code>${item.credentials.username}</code>
      </div>
      <div class="cred-field">
        <span>Mật khẩu TikTok:</span>
        <code>${item.credentials.password}</code>
      </div>
      <div class="cred-field">
        <span>Email gốc:</span>
        <code>${item.credentials.email}</code>
      </div>
      <div class="cred-field">
        <span>Mật khẩu Email:</span>
        <code>${item.credentials.emailPass}</code>
      </div>
      <div class="cred-field">
        <span>Mã xác thực 2FA:</span>
        <code>${item.credentials.twoFA}</code>
      </div>
    </div>
  `).join('');

  // Cập nhật chi tiết hoá đơn
  const receiptEl = document.getElementById("receiptDetails");
  receiptEl.innerHTML = `
    <p><strong>Mã giao dịch:</strong> <span style="color: var(--secondary);">${currentOrder.code}</span></p>
    <p><strong>Khách hàng:</strong> ${currentOrder.customer.name} - ${currentOrder.customer.phone}</p>
    <p><strong>Email nhận file backup:</strong> ${currentOrder.customer.email}</p>
    <p><strong>Trạng thái:</strong> <span style="color: var(--success); font-weight: 700;">ĐÃ THANH TOÁN & BÀN GIAO THÀNH CÔNG</span></p>
  `;

  // Xóa giỏ hàng & tải lại danh sách tài khoản ngoài trang chủ
  cart = [];
  updateCartUI();
  filterProducts(); // Cập nhật lại sản phẩm đã bán

  showStep(3);
}

function copyAccountCredentials() {
  if (!currentOrder || !currentOrder.items) return;

  let textToCopy = `=== THÔNG TIN BÀN GIAO TÀI KHOẢN TIKTOK ===\nMã đơn: ${currentOrder.code}\nKhách hàng: ${currentOrder.customer.name}\n\n`;

  currentOrder.items.forEach(item => {
    textToCopy += `--- [Tài khoản: #${item.id} - ${item.title}] ---\n`;
    textToCopy += `User: ${item.credentials.username}\n`;
    textToCopy += `Pass: ${item.credentials.password}\n`;
    textToCopy += `Mail: ${item.credentials.email}\n`;
    textToCopy += `Pass Mail: ${item.credentials.emailPass}\n`;
    textToCopy += `2FA Key: ${item.credentials.twoFA}\n\n`;
  });

  textToCopy += `Bảo hành 1 đổi 1. Hỗ trợ kỹ thuật qua Zalo: 0988.xxx.xxx`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("✅ Đã sao chép toàn bộ thông tin đăng nhập vào bộ nhớ tạm!");
  });
}

// Cấu hình Google Sheets Sync
const GOOGLE_SHEET_ID = "1XPtKiCtq-VMmfD-ua0mITpeBQdRapbcvzrut05UwQFw";
let googleAppsScriptUrl = localStorage.getItem("tiktok_google_sheet_webhook") || "https://script.google.com/macros/s/AKfycbyExqZ19T-lSTpN0LTGGv0XLiK0sOWokXKsS1_Zl4_sU8y3FpRq8kxzIinyLnf6ij-T2A/exec";

function saveGoogleScriptUrl(url) {
  googleAppsScriptUrl = url.trim();
  localStorage.setItem("tiktok_google_sheet_webhook", googleAppsScriptUrl);
  alert("✅ Đã lưu cấu hình Google Apps Script Webhook!");
}

// Gửi thông tin người dùng lên Google Sheet khi đăng ký
async function sendUserToGoogleSheet(userData) {
  if (!googleAppsScriptUrl) {
    console.log("Chưa cấu hình Google Apps Script Webhook. Bỏ qua gửi Google Sheets trực tiếp.");
    return;
  }

  try {
    const payload = {
      fullName: userData.fullName || "",
      username: userData.username || "",
      password: userData.password || "",
      role: userData.role || "customer",
      registeredAt: userData.registeredAt || new Date().toLocaleString("vi-VN"),
      device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Điện thoại (Mobile)" : "Máy tính (Desktop)"
    };

    await fetch(googleAppsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });
    console.log("✅ Đã gửi dữ liệu đăng ký lên Google Sheets thành công!");
  } catch (err) {
    console.warn("Lỗi khi gửi lên Google Sheets:", err);
  }
}
// Danh sách người dùng hệ thống lưu vĩnh viễn trong LocalStorage
let defaultInitialUsers = [
  { username: "admin", password: "admin123", fullName: "Quản Trị Viên", role: "admin", registeredAt: "Hệ thống tạo sẵn" },
  { username: "khachhang_demo@gmail.com", password: "123", fullName: "Nguyễn Văn Demo", role: "customer", registeredAt: "11/11/2026, 00:05:00" }
];

let systemUsers = JSON.parse(localStorage.getItem("tiktok_shop_users") || "null");
if (!systemUsers || !Array.isArray(systemUsers) || systemUsers.length === 0) {
  systemUsers = [...defaultInitialUsers];
  localStorage.setItem("tiktok_shop_users", JSON.stringify(systemUsers));
}

function saveSystemUsers() {
  localStorage.setItem("tiktok_shop_users", JSON.stringify(systemUsers));
  const countEl = document.getElementById("adminUsersCount");
  const totalEl = document.getElementById("adminTotalRegisteredUsers");
  const customerCount = systemUsers.filter(u => u.role !== "admin").length;
  if (countEl) countEl.innerText = customerCount;
  if (totalEl) totalEl.innerText = customerCount;
}

// Người dùng hiện tại đang đăng nhập (mặc định là khách vãng lai hoặc tài khoản đã lưu)
let currentUser = JSON.parse(localStorage.getItem("current_logged_user") || "null");
let authMode = "login"; // "login" hoặc "register"

function updateAuthUI() {
  const adminBtn = document.getElementById("adminBtn");
  const userDisplayName = document.getElementById("userDisplayName");

  // Kiểm tra tham số bí mật trên link: ?admin=hoan_admin hoặc ?admin=true
  const urlParams = new URLSearchParams(window.location.search);
  const paramVal = urlParams.get("admin");
  const hasAdminKeyInUrl = paramVal === "hoan_admin" || paramVal === "true" || paramVal === "1";

  const isAdminAccount = currentUser && currentUser.role === "admin";

  if (currentUser) {
    userDisplayName.innerText = currentUser.fullName || currentUser.username;
  } else {
    userDisplayName.innerText = "Đăng Nhập / Đăng Ký";
  }

  // NÚT ADMIN:
  // CHỈ HIỂN THỊ KHI:
  // 1. Đường link có chứa mã bí mật: ?admin=true (dành cho chủ shop & nhân viên)
  // 2. HOẶC đăng nhập chính xác bằng tài khoản admin (admin / admin123)
  // TUYỆT ĐỐI ẨN đối với khách hàng thông thường truy cập web!
  if (adminBtn) {
    if (hasAdminKeyInUrl || isAdminAccount) {
      adminBtn.style.display = "inline-flex";
    } else {
      adminBtn.style.display = "none";
    }
  }
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  const form = document.getElementById("authForm");
  const profile = document.getElementById("loggedInProfile");

  if (currentUser) {
    form.style.display = "none";
    profile.style.display = "block";
    document.getElementById("profileName").innerText = currentUser.fullName || currentUser.username;
    document.getElementById("profileRole").innerText = currentUser.role === "admin" 
      ? "Vai trò: Quản Trị Viên Hệ Thống (Toàn quyền)" 
      : "Vai trò: Khách Hàng Mua Sắm";
  } else {
    form.style.display = "block";
    profile.style.display = "none";
    switchAuthMode("login");
  }

  modal.classList.add("active");
}

function switchAuthMode(mode) {
  authMode = mode;
  const isLogin = mode === "login";
  document.getElementById("tabLogin").className = "admin-tab-btn " + (isLogin ? "active" : "");
  document.getElementById("tabRegister").className = "admin-tab-btn " + (!isLogin ? "active" : "");
  document.getElementById("authModalTitle").innerHTML = isLogin 
    ? '<i class="fa-solid fa-user-lock"></i> Đăng Nhập Tài Khoản' 
    : '<i class="fa-solid fa-user-plus"></i> Đăng Ký Khách Mua Hàng';
  document.getElementById("fullNameGroup").style.display = isLogin ? "none" : "block";
  document.getElementById("authSubmitBtn").innerText = isLogin ? "Đăng Nhập Ngay" : "Tạo Tài Khoản Khách Mua";
  document.getElementById("authHintText").innerText = isLogin 
    ? "Mẹo: Tài khoản quản trị mặc định là admin / mật khẩu: admin123."
    : "Đăng ký tài khoản người mua: Bạn sẽ quản lý các tài khoản đã mua an toàn, tiện lợi và không bị làm phiền bởi giao diện Admin.";
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const username = document.getElementById("authUsername").value.trim().toLowerCase();
  const password = document.getElementById("authPassword").value.trim();

  // Đảm bảo lấy danh sách mới nhất từ LocalStorage trước khi xử lý
  systemUsers = JSON.parse(localStorage.getItem("tiktok_shop_users") || "[]");
  if (systemUsers.length === 0) {
    systemUsers = [...defaultInitialUsers];
  }

  if (authMode === "login") {
    const user = systemUsers.find(u => u.username.toLowerCase() === username && u.password === password);
    if (!user) {
      alert("Tên tài khoản hoặc mật khẩu không chính xác!");
      return;
    }
    currentUser = user;
    localStorage.setItem("current_logged_user", JSON.stringify(currentUser));
    if (user.role === "admin") {
      localStorage.setItem("is_staff_admin_authorized", "true");
    }
    alert(`Xin chào ${user.fullName || user.username}! Đăng nhập thành công với vai trò: ${user.role === 'admin' ? 'Quản Trị Viên (Admin)' : 'Khách Mua Hàng'}.`);
  } else {
    // Đăng ký tài khoản khách hàng mới
    if (systemUsers.some(u => u.username.toLowerCase() === username)) {
      alert(`Tài khoản "${username}" đã tồn tại! Vui lòng chọn tên đăng nhập khác.`);
      return;
    }
    const fullName = document.getElementById("authFullName").value.trim() || username;
    const newUser = {
      username: username,
      password: password,
      fullName: fullName,
      role: "customer", // PHÂN BIỆT RÕ RÀNG: ĐÂY LÀ KHÁCH MUA HÀNG
      registeredAt: new Date().toLocaleString("vi-VN")
    };

    systemUsers.push(newUser);
    saveSystemUsers();

    // Gửi tự động lên Google Sheet Cloud
    sendUserToGoogleSheet(newUser);

    currentUser = newUser;
    localStorage.setItem("current_logged_user", JSON.stringify(currentUser));

    alert(`🎉 Đăng ký thành công!\n- Khách hàng: ${fullName}\n- Tài khoản: ${username}\n- Vai trò: Khách Mua Hàng\n\n(Hệ thống đã lưu lại tài khoản này vào danh sách Quản Trị Viên).`);
  }

  updateAuthUI();
  closeModal("authModal");
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem("current_logged_user");
  alert("Đã đăng xuất tài khoản!");
  updateAuthUI();
  closeModal("authModal");
}

// Khởi tạo trạng thái đăng nhập ban đầu
document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();
  const closeAuthBtn = document.getElementById("closeAuth");
  if (closeAuthBtn) {
    closeAuthBtn.addEventListener("click", () => closeModal("authModal"));
  }
});

function openAdminModal() {
  switchAdminTab('list');
  renderAdminProductList();
  renderAdminUsersList();
  document.getElementById("adminModal").classList.add("active");
}

function switchAdminTab(tab) {
  const isList = tab === 'list';
  const isAdd = tab === 'add';
  const isUsers = tab === 'users';
  const isStaff = tab === 'staff';

  document.getElementById("tabManageProducts").className = "admin-tab-btn " + (isList ? "active" : "");
  document.getElementById("tabAddProduct").className = "admin-tab-btn " + (isAdd ? "active" : "");
  document.getElementById("tabManageUsers").className = "admin-tab-btn " + (isUsers ? "active" : "");
  document.getElementById("tabStaffAccess").className = "admin-tab-btn " + (isStaff ? "active" : "");

  document.getElementById("adminViewList").style.display = isList ? "block" : "none";
  document.getElementById("adminViewAdd").style.display = isAdd ? "block" : "none";
  document.getElementById("adminViewUsers").style.display = isUsers ? "block" : "none";
  document.getElementById("adminViewStaff").style.display = isStaff ? "block" : "none";

  if (isUsers) {
    renderAdminUsersList();
  } else if (isStaff) {
    generateStaffSecretLink();
  }
}

// Render danh sách người dùng đăng ký (CHỈ ADMIN MỚI ĐƯỢC XEM)
function renderAdminUsersList() {
  const tbody = document.getElementById("adminUsersTableBody");
  const countEl = document.getElementById("adminUsersCount");
  const totalEl = document.getElementById("adminTotalRegisteredUsers");
  const search = (document.getElementById("adminUserSearchInput")?.value || "").toLowerCase().trim();

  // Đọc danh sách mới nhất từ LocalStorage
  systemUsers = JSON.parse(localStorage.getItem("tiktok_shop_users") || "[]");
  if (systemUsers.length === 0) {
    systemUsers = [...defaultInitialUsers];
    localStorage.setItem("tiktok_shop_users", JSON.stringify(systemUsers));
  }

  // Đếm riêng số lượng khách mua hàng (loại trừ tài khoản admin)
  const customersOnly = systemUsers.filter(u => u.role === "customer");
  const totalCustomers = customersOnly.length;

  if (countEl) countEl.innerText = totalCustomers;
  if (totalEl) totalEl.innerText = totalCustomers;

  let filtered = systemUsers.filter(u => {
    if (!search) return true;
    return (u.fullName && u.fullName.toLowerCase().includes(search)) || 
           (u.username && u.username.toLowerCase().includes(search)) ||
           (u.role && u.role.toLowerCase().includes(search));
  });

  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 25px;">Không tìm thấy người dùng nào.</td></tr>`;
    return;
  }

  filtered.forEach((user, index) => {
    const tr = document.createElement("tr");
    const isAdmin = user.role === "admin";

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <strong style="color: ${isAdmin ? 'var(--primary)' : '#fff'}; font-size: 14px;">
          ${user.fullName || 'Khách vãng lai'}
        </strong>
      </td>
      <td><code style="color: var(--secondary); font-size: 13px;">${user.username}</code></td>
      <td><span style="font-family: monospace; color: #a0aec0; background: #000; padding: 2px 6px; border-radius: 4px;">${user.password}</span></td>
      <td>
        ${isAdmin ? `
          <span style="background: rgba(254, 44, 85, 0.2); color: var(--primary); padding: 4px 10px; border-radius: 20px; font-weight: 700; font-size: 12px; border: 1px solid rgba(254, 44, 85, 0.3);">
            👑 QUẢN TRỊ VIÊN (ADMIN)
          </span>
        ` : `
          <span style="background: rgba(37, 244, 238, 0.15); color: var(--secondary); padding: 4px 10px; border-radius: 20px; font-weight: 700; font-size: 12px; border: 1px solid rgba(37, 244, 238, 0.3);">
            👤 KHÁCH MUA HÀNG
          </span>
        `}
      </td>
      <td style="font-size: 12px; color: var(--text-muted);">${user.registeredAt || 'Vừa đăng ký'}</td>
      <td>
        ${!isAdmin ? `
          <button class="btn-icon-danger" onclick="deleteUser('${user.username}')" title="Xóa tài khoản khách này">
            <i class="fa-solid fa-trash"></i> Xóa
          </button>
        ` : '<span style="color: var(--text-muted); font-size: 11px; font-style: italic;">Mặc định</span>'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteUser(username) {
  if (confirm(`Bạn có chắc muốn xóa tài khoản người mua "${username}" khỏi hệ thống?`)) {
    systemUsers = systemUsers.filter(u => u.username !== username);
    saveSystemUsers();
    renderAdminUsersList();
    alert(`Đã xóa tài khoản ${username}!`);
  }
}

function generateStaffSecretLink() {
  const currentBaseUrl = window.location.origin + window.location.pathname;
  const secretLink = currentBaseUrl + "?admin=hoan_admin";
  const inputEl = document.getElementById("adminSecretLinkInput");
  if (inputEl) {
    inputEl.value = secretLink;
  }
}

function copyAdminSecretLink() {
  const inputEl = document.getElementById("adminSecretLinkInput");
  if (inputEl) {
    navigator.clipboard.writeText(inputEl.value).then(() => {
      alert("✅ Đã sao chép link bí mật dành cho nhân viên!\n\nLink: " + inputEl.value + "\n\nBạn có thể gửi link này qua Zalo cho nhân viên.");
    }).catch(() => {
      alert("Link bí mật: " + inputEl.value);
    });
  }
}

function renderAdminProductList() {
  const tbody = document.getElementById("adminProductTableBody");
  const countEl = document.getElementById("adminTotalCount");
  const search = (document.getElementById("adminSearchInput")?.value || "").toLowerCase().trim();

  let filtered = accounts.filter(item => {
    if (!search) return true;
    return item.id.toLowerCase().includes(search) || item.title.toLowerCase().includes(search);
  });

  countEl.innerText = accounts.length;
  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 25px;">Không có tài khoản nào.</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement("tr");
    const currentStatus = item.status || (item.sold ? "sold" : "available");
    const currentStock = typeof item.stock !== "undefined" ? item.stock : 1;

    tr.innerHTML = `
      <td><strong style="color: var(--secondary);">#${item.id}</strong></td>
      <td>
        <div style="font-weight: 600;">${item.title}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${item.credentials?.username || '@chua_cap_nhat'}</div>
      </td>
      <td>${item.followers.toLocaleString()}</td>
      <td>
        <div class="price-stepper">
          <button class="btn-step" onclick="adjustAccountPrice('${item.id}', -50000)" title="Giảm 50.000đ">-</button>
          <input type="number" class="inline-price-input" value="${item.price}" step="10000"
            onchange="updateAccountPrice('${item.id}', this.value)" title="Nhập giá mới hoặc bấm nút +/-">
          <button class="btn-step" onclick="adjustAccountPrice('${item.id}', 50000)" title="Tăng 50.000đ">+</button>
        </div>
      </td>
      <td>
        <input type="number" class="inline-stock-input" value="${currentStock}" min="0"
          onchange="updateAccountStock('${item.id}', this.value)" title="Cập nhật số lượng tài khoản trong kho">
      </td>
      <td>
        <select class="inline-status-select" onchange="updateAccountStatus('${item.id}', this.value)">
          <option value="available" class="status-opt-available" ${currentStatus === 'available' ? 'selected' : ''}>✅ Còn hàng</option>
          <option value="sold" class="status-opt-sold" ${currentStatus === 'sold' ? 'selected' : ''}>❌ Đã bán (Hết)</option>
          <option value="expired" class="status-opt-expired" ${currentStatus === 'expired' ? 'selected' : ''}>⚠️ Hết hạn</option>
        </select>
      </td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-icon-danger" onclick="deleteAccount('${item.id}')" title="Xóa tài khoản này">
            <i class="fa-solid fa-trash"></i> Xóa
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Hàm tăng / giảm giá theo bước nhảy
function adjustAccountPrice(id, delta) {
  const acc = accounts.find(a => a.id === id);
  if (acc) {
    let newPrice = (acc.price || 0) + delta;
    if (newPrice < 10000) newPrice = 10000;
    acc.price = newPrice;
    saveAccountsToStorage();
    renderAdminProductList();
    filterProducts();
  }
}

// Cập nhật số lượng sản phẩm trong kho
function updateAccountStock(id, newStock) {
  const stockVal = parseInt(newStock, 10);
  if (isNaN(stockVal) || stockVal < 0) {
    alert("Số lượng kho không hợp lệ!");
    renderAdminProductList();
    return;
  }

  const acc = accounts.find(a => a.id === id);
  if (acc) {
    acc.stock = stockVal;
    if (stockVal === 0) {
      acc.status = "sold";
      acc.sold = true;
    } else if (acc.status === "sold") {
      acc.status = "available";
      acc.sold = false;
    }
    saveAccountsToStorage();
    renderAdminProductList();
    filterProducts();
  }
}

// Cập nhật giá thủ công
function updateAccountPrice(id, newPrice) {
  const val = parseInt(newPrice, 10);
  if (isNaN(val) || val <= 0) {
    alert("Vui lòng nhập giá tiền hợp lệ!");
    renderAdminProductList();
    return;
  }

  const acc = accounts.find(a => a.id === id);
  if (acc) {
    acc.price = val;
    saveAccountsToStorage();
    filterProducts(); // Cập nhật lại giao diện người mua ngoài trang chủ
    console.log(`Đã cập nhật giá cho #${id}: ${val} VNĐ`);
  }
}

// Cập nhật trạng thái: Còn hàng / Đã bán / Hết hạn
function updateAccountStatus(id, newStatus) {
  const acc = accounts.find(a => a.id === id);
  if (acc) {
    acc.status = newStatus;
    acc.sold = (newStatus === "sold");
    saveAccountsToStorage();
    filterProducts(); // Cập nhật ngay giao diện trang chủ
  }
}

// Xóa sản phẩm khỏi kho
function deleteAccount(id) {
  if (confirm(`Bạn có chắc chắn muốn xóa tài khoản #${id} khỏi hệ thống không?`)) {
    accounts = accounts.filter(a => a.id !== id);
    saveAccountsToStorage();
    renderAdminProductList();
    filterProducts();
  }
}

// Khôi phục danh sách mẫu ban đầu
function resetDefaultAccounts() {
  if (confirm("Bạn có muốn khôi phục lại kho tài khoản về dữ liệu mẫu ban đầu không?")) {
    accounts = JSON.parse(JSON.stringify(initialAccounts));
    saveAccountsToStorage();
    renderAdminProductList();
    filterProducts();
    alert("Đã khôi phục kho hàng mẫu thành công!");
  }
}

// Xử lý thêm sản phẩm mới
function handleAddNewAccount(e) {
  e.preventDefault();

  const id = document.getElementById("newAccId").value.trim().toUpperCase();
  if (accounts.some(a => a.id === id)) {
    alert(`Mã tài khoản #${id} đã tồn tại trong kho! Vui lòng chọn mã khác.`);
    return;
  }

  const title = document.getElementById("newAccTitle").value.trim();
  const category = document.getElementById("newAccCategory").value;
  const price = parseInt(document.getElementById("newAccPrice").value, 10);
  const stock = parseInt(document.getElementById("newAccStock")?.value || "1", 10);
  const followers = parseInt(document.getElementById("newAccFollowers").value, 10);
  const likes = parseInt(document.getElementById("newAccLikes").value, 10);
  const status = document.getElementById("newAccStatus").value;
  const desc = document.getElementById("newAccDesc").value.trim() || "Kênh TikTok chính chủ, tương tác cao, bảo hành đầy đủ.";

  // Xử lý tags
  const rawTags = document.getElementById("newAccTags").value.trim();
  const featureLabels = rawTags ? rawTags.split(",").map(t => t.trim()).filter(Boolean) : ["Tài khoản VIP", "Tương tác thật"];

  // Dữ liệu đăng nhập
  const username = document.getElementById("newCredUser").value.trim();
  const password = document.getElementById("newCredPass").value.trim();
  const email = document.getElementById("newCredEmail").value.trim();
  const emailPass = document.getElementById("newCredEmailPass").value.trim();
  const twoFA = document.getElementById("newCred2FA").value.trim() || "CHUA_BAT_2FA";

  const newAcc = {
    id,
    title,
    category,
    followers,
    likes,
    price,
    stock,
    status,
    sold: status === "sold",
    features: ["live"],
    featureLabels,
    description: desc,
    credentials: {
      username,
      password,
      email,
      emailPass,
      twoFA
    }
  };

  accounts.unshift(newAcc);
  saveAccountsToStorage();

  alert(`✅ Đã thêm tài khoản #${id} vào kho mở bán thành công!`);
  document.getElementById("adminAddForm").reset();

  switchAdminTab('list');
  renderAdminProductList();
  filterProducts();
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Đã sao chép: " + text);
  }).catch(() => {
    alert("Sao chép: " + text);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }
  openCheckout();
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Gắn sự kiện lắng nghe
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(accounts);

  document.getElementById("categoryFilter").addEventListener("change", filterProducts);
  document.getElementById("followerFilter").addEventListener("change", filterProducts);
  document.getElementById("featureFilter").addEventListener("change", filterProducts);
  document.getElementById("searchInput").addEventListener("input", filterProducts);

  // Cart modal
  document.getElementById("cartBtn").addEventListener("click", () => {
    document.getElementById("cartModal").classList.add("active");
  });

  document.getElementById("closeCart").addEventListener("click", () => {
    closeModal("cartModal");
  });

  document.getElementById("closeDetail").addEventListener("click", () => {
    closeModal("detailModal");
  });

  document.getElementById("closeCheckout").addEventListener("click", () => {
    closeCheckoutModal();
  });

  // Sự kiện mở kho đơn hàng đã mua
  document.getElementById("myOrdersBtn").addEventListener("click", () => {
    openMyOrdersModal();
  });

  // Sự kiện mở bảng Quản Trị Viên (Admin)
  document.getElementById("adminBtn").addEventListener("click", () => {
    openAdminModal();
  });

  document.getElementById("closeAdmin").addEventListener("click", () => {
    closeModal("adminModal");
  });

  document.getElementById("closeMyOrders").addEventListener("click", () => {
    closeModal("myOrdersModal");
  });

  // Khởi tạo số lượng đơn đã mua ban đầu
  updateMyOrdersBadge();

  // Đóng modal khi click ra ngoài
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("active");
    }
  });
});

