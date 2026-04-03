import React, { useEffect, useMemo, useState } from "react";

const defaultLookups = {
  lines: [
    { label: "없음", code: "" },
    { label: "맥세이프", code: "M" },
    { label: "자유형", code: "FR" },
    { label: "에어팟", code: "A" },
    { label: "버즈", code: "B" },
    { label: "에어팟 맥스", code: "AM" },
  ],
  materials: [
    { label: "없음", code: "" },
    { label: "하드케이스", code: "HC" },
    { label: "투명하드", code: "HDCL" },
    { label: "투명젤하드", code: "JH" },
    { label: "터프범퍼", code: "TB" },
    { label: "카드포켓", code: "PK" },
    { label: "에폭시범퍼", code: "EPB" },
    { label: "글라스범퍼", code: "GB" },
    { label: "TPU/실리콘", code: "TPU" },
    { label: "아크릴", code: "AC" },
    { label: "투명아크릴", code: "TAC" },
    { label: "에폭시", code: "EPX" },
    { label: "거울", code: "MR" },
    { label: "구슬", code: "BEAD" },
    { label: "틴케이스", code: "TIN" },
    { label: "메탈", code: "MM" },
    { label: "마그넷", code: "MAG" },
  ],
  features: [
    { label: "없음", code: "" },
    { label: "유광", code: "G" },
    { label: "무광", code: "M" },
    { label: "미러", code: "MR" },
    { label: "홀로그램", code: "H" },
    { label: "실버", code: "SV" },
    { label: "투명", code: "CL" },
    { label: "글리터", code: "GL" },
    { label: "스탠다드", code: "ST" },
    { label: "프리미엄", code: "PR" },
    { label: "LED", code: "LED" },
    { label: "원형", code: "OR" },
    { label: "하트", code: "HT" },
  ],
  products: [
    { label: "없음", code: "" },
    { label: "케이스", code: "" },
    { label: "스마트톡", code: "TOK" },
    { label: "스마트톡 프로", code: "TOKP" },
    { label: "키링", code: "KEY" },
    { label: "키링 D고리", code: "KEYD" },
    { label: "키링 볼체인", code: "KEYB" },
    { label: "등신대", code: "STD" },
    { label: "지비츠", code: "JIB" },
    { label: "집게", code: "CLIP" },
    { label: "마그넷", code: "MAG" },
    { label: "메모홀더", code: "MHC" },
    { label: "멀티펜", code: "MTP" },
    { label: "젤볼펜", code: "BAP" },
    { label: "코롯토", code: "COO" },
    { label: "자", code: "RUL" },
    { label: "오프너", code: "OPN" },
    { label: "손거울", code: "MIR" },
    { label: "문진", code: "PPR" },
    { label: "티코스터", code: "TCO" },
    { label: "인센스홀더", code: "INS" },
  ],
  printTypes: [
    { label: "없음", code: "" },
    { label: "일반", code: "GN" },
    { label: "라미", code: "LA" },
  ],
  printSides: [
    { label: "없음", code: "" },
    { label: "단면", code: "SS" },
    { label: "양면", code: "DB" },
  ],
  colors: [
    { label: "없음", code: "" },
    { label: "블랙", code: "BK" },
    { label: "화이트", code: "WH" },
    { label: "투명", code: "CL" },
    { label: "실버", code: "SV" },
    { label: "골드", code: "GD" },
    { label: "오렌지", code: "OR" },
    { label: "블루", code: "BL" },
    { label: "그린", code: "GR" },
    { label: "핑크", code: "PK" },
    { label: "레드", code: "RD" },
    { label: "퍼플", code: "PU" },
    { label: "그레이", code: "GY" },
  ],
};

const defaultProducts = [
  {
    category: "핸드폰 케이스",
    name: "하드케이스 (유광/무광)",
    line: "",
    material: "HC",
    feature: "",
    product: "",
    existingCode: "HC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "핸드폰 케이스",
    name: "맥세이프 하드케이스 (유광/무광)",
    line: "M",
    material: "HC",
    feature: "",
    product: "",
    existingCode: "MHC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "핸드폰 케이스",
    name: "터프범퍼케이스",
    line: "",
    material: "TB",
    feature: "",
    product: "",
    existingCode: "TBC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "핸드폰 케이스",
    name: "맥세이프 터프범퍼케이스",
    line: "M",
    material: "TB",
    feature: "",
    product: "",
    existingCode: "MTBC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "핸드폰 케이스",
    name: "글라스범퍼케이스 (유광/무광/미러/홀로그램)",
    line: "",
    material: "GB",
    feature: "",
    product: "",
    existingCode: "GB",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "핸드폰 케이스",
    name: "맥세이프 글라스범퍼케이스 (유광/무광/미러/홀로그램)",
    line: "M",
    material: "GB",
    feature: "",
    product: "",
    existingCode: "MGB",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "스마트톡",
    name: "자유형 투명아크릴 스마트톡 (일반/라미)",
    line: "FR",
    material: "TAC",
    feature: "",
    product: "TOK",
    existingCode: "FRTACTOK",
    modelRequired: false,
    colorRequired: false,
  },
  {
    category: "스마트톡",
    name: "자유형 맥세이프 투명아크릴 스마트톡 프로 (일반/라미)",
    line: "FRM",
    material: "TAC",
    feature: "",
    product: "TOKP",
    existingCode: "FRMTACTOKP",
    modelRequired: false,
    colorRequired: false,
  },
  {
    category: "스마트톡",
    name: "자유형 에폭시 스마트톡",
    line: "FR",
    material: "EPX",
    feature: "",
    product: "TOK",
    existingCode: "FREPXTOK",
    modelRequired: false,
    colorRequired: false,
  },
  {
    category: "에어팟/버즈",
    name: "에어팟 하드케이스 (유광/무광)",
    line: "A",
    material: "HC",
    feature: "",
    product: "",
    existingCode: "AHC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "에어팟/버즈",
    name: "버즈 하드케이스 (유광/무광)",
    line: "B",
    material: "HC",
    feature: "",
    product: "",
    existingCode: "BHC",
    modelRequired: true,
    colorRequired: false,
  },
  {
    category: "굿즈/문구",
    name: "자유형 투명아크릴 키링 D고리 (일반/라미)",
    line: "FR",
    material: "TAC",
    feature: "",
    product: "KEYD",
    existingCode: "FRTACKEYD",
    modelRequired: false,
    colorRequired: true,
  },
  {
    category: "굿즈/문구",
    name: "자유형 투명아크릴 등신대 (일반/라미)",
    line: "FR",
    material: "TAC",
    feature: "",
    product: "STD",
    existingCode: "FRTACSTD",
    modelRequired: false,
    colorRequired: true,
  },
  {
    category: "굿즈/문구",
    name: "메탈 멀티펜",
    line: "",
    material: "MM",
    feature: "",
    product: "MTP",
    existingCode: "MMMTP",
    modelRequired: false,
    colorRequired: true,
  },
  {
    category: "리빙/홈데코",
    name: "아크릴 반구 마그넷",
    line: "",
    material: "AC",
    feature: "",
    product: "MAG",
    existingCode: "ACMAG",
    modelRequired: false,
    colorRequired: true,
  },
];

const tabs = [
  { key: "generator", label: "코드 생성기" },
  { key: "master", label: "상품마스터" },
  { key: "dictionary", label: "약어사전" },
  { key: "search", label: "코드 검색" },
];

const STORAGE_KEY = "husk-code-manager-v1";

function getLabel(items, code) {
  return items.find((x) => x.code === code)?.label || "";
}

function dedupeJoin(parts) {
  return parts.filter(Boolean).join("");
}

function buildBaseCode(selected) {
  if (selected.existingCode) return selected.existingCode;
  return dedupeJoin([selected.line, selected.material, selected.feature, selected.product]);
}

function buildFinalCode(baseCode, model) {
  return [baseCode, model].filter(Boolean).join("_");
}

function buildFileName(finalCode, color, printType, printSide) {
  return [finalCode, color, printType, printSide].filter(Boolean).join("_");
}

function Select({ value, onChange, items }) {
  return (
    <select
      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {items.map((item) => (
        <option key={`${item.label}-${item.code}`} value={item.code}>
          {item.label} {item.code ? `(${item.code})` : ""}
        </option>
      ))}
    </select>
  );
}

function SectionCard({ title, children, right }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        {right}
      </div>
      {children}
    </div>
  );
}

export default function HuskCodeManagerApp() {
  const [tab, setTab] = useState("generator");
  const [lookups, setLookups] = useState(defaultLookups);
  const [products, setProducts] = useState(defaultProducts);
  const [search, setSearch] = useState("");

  const [selectedProductName, setSelectedProductName] = useState(defaultProducts[0].name);
  const [line, setLine] = useState("");
  const [material, setMaterial] = useState("");
  const [feature, setFeature] = useState("");
  const [productCode, setProductCode] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [printType, setPrintType] = useState("");
  const [printSide, setPrintSide] = useState("");
  const [manualBaseCode, setManualBaseCode] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (parsed.lookups) setLookups(parsed.lookups);
      if (parsed.products) setProducts(parsed.products);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ lookups, products }));
  }, [lookups, products]);

  const selectedMaster = useMemo(
    () => products.find((p) => p.name === selectedProductName) || products[0],
    [products, selectedProductName]
  );

  useEffect(() => {
    if (!selectedMaster) return;
    setLine(selectedMaster.line || "");
    setMaterial(selectedMaster.material || "");
    setFeature(selectedMaster.feature || "");
    setProductCode(selectedMaster.product || "");
    setManualBaseCode(selectedMaster.existingCode || "");
  }, [selectedMaster]);

  const autoBaseCode = buildBaseCode({
    existingCode: manualBaseCode,
    line,
    material,
    feature,
    product: productCode,
  });

  const finalCode = buildFinalCode(autoBaseCode, model);
  const fileName = buildFileName(finalCode, color, printType, printSide);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.existingCode || "").toLowerCase().includes(q)
    );
  }, [products, search]);

  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    line: "",
    material: "",
    feature: "",
    product: "",
    existingCode: "",
    modelRequired: false,
    colorRequired: false,
  });

  const addProduct = () => {
    if (!newProduct.name.trim()) return;
    setProducts((prev) => [newProduct, ...prev]);
    setNewProduct({
      category: "",
      name: "",
      line: "",
      material: "",
      feature: "",
      product: "",
      existingCode: "",
      modelRequired: false,
      colorRequired: false,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">사내용 코드 생성/관리 툴</div>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">허스크 / 커스텀랜드 상품코드 관리자</h1>
              <p className="mt-2 text-sm text-slate-600">
                라인 / 소재 / 특징 / 제품 / 기종 / 컬러 / 일반·라미 / 단면·양면 규칙을 한 화면에서 관리하도록 만든 초안.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                    tab === t.key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {tab === "generator" && (
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionCard title="코드 생성기">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">상품명</label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
                    value={selectedProductName}
                    onChange={(e) => setSelectedProductName(e.target.value)}
                  >
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>
                        [{p.category}] {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">라인</label>
                  <Select value={line} onChange={setLine} items={lookups.lines} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">소재·형태</label>
                  <Select value={material} onChange={setMaterial} items={lookups.materials} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">특징</label>
                  <Select value={feature} onChange={setFeature} items={lookups.features} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">제품</label>
                  <Select value={productCode} onChange={setProductCode} items={lookups.products} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">기종명</label>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" value={model} onChange={(e) => setModel(e.target.value.toUpperCase())} placeholder="예: S26+, BUDS4" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">컬러</label>
                  <Select value={color} onChange={setColor} items={lookups.colors} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">인쇄종류</label>
                  <Select value={printType} onChange={setPrintType} items={lookups.printTypes} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">인쇄방식</label>
                  <Select value={printSide} onChange={setPrintSide} items={lookups.printSides} />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">기존 운영코드 / 직접코드</label>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" value={manualBaseCode} onChange={(e) => setManualBaseCode(e.target.value.toUpperCase())} placeholder="예: MHCG, TBC, FRMTACTOKP" />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="결과">
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="text-xs font-medium text-slate-500">기본코드</div>
                  <div className="mt-1 break-all text-2xl font-bold text-slate-900">{autoBaseCode || "-"}</div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="text-xs font-medium text-slate-500">최종운영코드</div>
                  <div className="mt-1 break-all text-2xl font-bold text-slate-900">{finalCode || "-"}</div>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <div className="text-xs font-medium text-slate-300">추천 파일명</div>
                  <div className="mt-1 break-all text-xl font-bold">{fileName || "-"}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
                  케이스류는 기종명을 붙이고, 컬러/일반·라미/단면·양면은 파일명 뒤에 언더바로 붙이는 방식으로 운영하면 관리가 제일 편함.
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {tab === "master" && (
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionCard title="신규 상품 추가">
              <div className="grid gap-3">
                <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="카테고리" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
                <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="상품명" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                <Select value={newProduct.line} onChange={(v) => setNewProduct({ ...newProduct, line: v })} items={lookups.lines} />
                <Select value={newProduct.material} onChange={(v) => setNewProduct({ ...newProduct, material: v })} items={lookups.materials} />
                <Select value={newProduct.feature} onChange={(v) => setNewProduct({ ...newProduct, feature: v })} items={lookups.features} />
                <Select value={newProduct.product} onChange={(v) => setNewProduct({ ...newProduct, product: v })} items={lookups.products} />
                <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="기존 운영코드" value={newProduct.existingCode} onChange={(e) => setNewProduct({ ...newProduct, existingCode: e.target.value.toUpperCase() })} />
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={newProduct.modelRequired} onChange={(e) => setNewProduct({ ...newProduct, modelRequired: e.target.checked })} />
                  기종명 필요
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={newProduct.colorRequired} onChange={(e) => setNewProduct({ ...newProduct, colorRequired: e.target.checked })} />
                  컬러 필요
                </label>
                <button onClick={addProduct} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">상품 추가</button>
              </div>
            </SectionCard>

            <SectionCard title="상품마스터 목록" right={<span className="text-sm text-slate-500">총 {products.length}개</span>}>
              <div className="max-h-[700px] overflow-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="sticky top-0 bg-slate-100 text-slate-700">
                    <tr>
                      <th className="px-3 py-2">카테고리</th>
                      <th className="px-3 py-2">상품명</th>
                      <th className="px-3 py-2">기존코드</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, idx) => (
                      <tr key={`${p.name}-${idx}`} className="border-t border-slate-200">
                        <td className="px-3 py-2 text-slate-600">{p.category}</td>
                        <td className="px-3 py-2 font-medium text-slate-800">{p.name}</td>
                        <td className="px-3 py-2 text-slate-600">{p.existingCode || buildBaseCode(p)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
        )}

        {tab === "dictionary" && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["라인", lookups.lines],
              ["소재·형태", lookups.materials],
              ["특징", lookups.features],
              ["제품", lookups.products],
            ].map(([title, items]) => (
              <SectionCard key={title} title={title}>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={`${title}-${item.label}-${item.code}`} className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-sm">
                      <span className="text-slate-700">{item.label}</span>
                      <span className="font-semibold text-slate-900">{item.code || "-"}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        )}

        {tab === "search" && (
          <SectionCard title="코드 검색">
            <div className="mb-4">
              <input
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="상품명, 카테고리, 코드로 검색"
              />
            </div>
            <div className="overflow-auto rounded-2xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-3 py-2">카테고리</th>
                    <th className="px-3 py-2">상품명</th>
                    <th className="px-3 py-2">라인</th>
                    <th className="px-3 py-2">소재</th>
                    <th className="px-3 py-2">특징</th>
                    <th className="px-3 py-2">제품</th>
                    <th className="px-3 py-2">기존코드</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p, idx) => (
                    <tr key={`${p.name}-${idx}`} className="border-t border-slate-200">
                      <td className="px-3 py-2 text-slate-600">{p.category}</td>
                      <td className="px-3 py-2 font-medium text-slate-800">{p.name}</td>
                      <td className="px-3 py-2">{getLabel(lookups.lines, p.line) || "-"}</td>
                      <td className="px-3 py-2">{getLabel(lookups.materials, p.material) || "-"}</td>
                      <td className="px-3 py-2">{getLabel(lookups.features, p.feature) || "-"}</td>
                      <td className="px-3 py-2">{getLabel(lookups.products, p.product) || "-"}</td>
                      <td className="px-3 py-2 font-semibold">{p.existingCode || buildBaseCode(p)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}
      </div>
    </div>
  );
}
