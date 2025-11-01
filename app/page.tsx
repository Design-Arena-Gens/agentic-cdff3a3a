export default function Home() {
  return (
    <div className="presentation">
      {/* Slayt 1: Başlık */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 1</div>
          <h1>1-3 Aylık Ateşli Bebeklerde İnvaziv Bakteriyel Enfeksiyonlar</h1>
        </div>
        <div className="content">
          <p style={{fontSize: '1.3rem', textAlign: 'center', margin: '2rem 0'}}>
            Güncel Yaklaşımlar ve Klinik Değerlendirme
          </p>
          <div style={{textAlign: 'center', marginTop: '3rem', color: '#94a3b8'}}>
            <p>Bilimsel Kongre Sunumu</p>
          </div>
        </div>
      </div>

      {/* Slayt 2: Giriş ve Önem */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 2</div>
          <h2>Giriş ve Klinik Önem</h2>
        </div>
        <div className="content">
          <div className="highlight-box">
            <h3>Neden Bu Yaş Grubu Önemli?</h3>
            <ul>
              <li><strong>Yüksek risk:</strong> 1-3 aylık bebekler invaziv bakteriyel enfeksiyon (İBE) için kritik risk grubunda</li>
              <li><strong>Tanı zorluğu:</strong> Klinik bulgular spesifik olmayabilir, ateş tek belirti olabilir</li>
              <li><strong>Ciddiyet:</strong> Meningit, sepsis, pnömoni gibi yaşamı tehdit eden durumlar gelişebilir</li>
              <li><strong>Acil yaklaşım:</strong> Hızlı tanı ve tedavi mortalite ve morbiditeyi azaltır</li>
            </ul>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h4>İnvaziv Bakteriyel Enfeksiyon (İBE) Tanımı</h4>
              <p>Normalde steril olan vücut bölgelerinden (kan, BOS, idrar, kemik vb.) bakterinin izole edilmesi ile karakterize ciddi enfeksiyonlar</p>
            </div>
            <div className="card">
              <h4>İnsidans</h4>
              <p>1-3 aylık ateşli bebeklerde İBE prevalansı <strong>%3-10</strong> arasında değişmektedir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slayt 3: Epidemiyoloji */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 3</div>
          <h2>Epidemiyoloji ve Risk Faktörleri</h2>
        </div>
        <div className="content">
          <h3>En Sık Görülen İnvaziv Bakteriyel Enfeksiyonlar</h3>

          <table>
            <thead>
              <tr>
                <th>Enfeksiyon Tipi</th>
                <th>Prevalans</th>
                <th>Klinik Önem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bakteriyemi/Sepsis</strong></td>
                <td>%2-3</td>
                <td>En sık İBE türü, hızla ilerleyebilir</td>
              </tr>
              <tr>
                <td><strong>İdrar Yolu Enfeksiyonu</strong></td>
                <td>%5-7</td>
                <td>En sık lokalize İBE, mesane-böbrek tutulumu</td>
              </tr>
              <tr>
                <td><strong>Bakteriyel Meningit</strong></td>
                <td>%0.5-1</td>
                <td>En ciddi İBE, kalıcı sekel riski yüksek</td>
              </tr>
              <tr>
                <td><strong>Pnömoni</strong></td>
                <td>%1-2</td>
                <td>Solunum sıkıntısı ile birlikte</td>
              </tr>
              <tr>
                <td><strong>Kemik-Eklem Enfeksiyonu</strong></td>
                <td>&lt;%1</td>
                <td>Nadir, lokalize bulgularla</td>
              </tr>
            </tbody>
          </table>

          <h3>Risk Faktörleri</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>Yüksek Risk Faktörleri</h4>
              <ul>
                <li>1 aydan küçük yaş</li>
                <li>Prematürite (&lt;37 hafta)</li>
                <li>Düşük doğum ağırlığı</li>
                <li>Maternal enfeksiyon öyküsü</li>
                <li>Uzamış membran rüptürü</li>
                <li>Maternal GBS kolonizasyonu</li>
                <li>Perinatal asfiksi</li>
              </ul>
            </div>
            <div className="card">
              <h4>Orta Risk Faktörleri</h4>
              <ul>
                <li>Erkek cinsiyet (2:1)</li>
                <li>Konjenital anomaliler</li>
                <li>İmmün yetmezlik</li>
                <li>Önceki hastane yatışı</li>
                <li>İnvaziv işlemler</li>
                <li>Aşılanma durumu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Slayt 4: Etken Mikroorganizmalar */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 4</div>
          <h2>Etken Mikroorganizmalar</h2>
        </div>
        <div className="content">
          <h3>Yaş Gruplarına Göre Etkenler</h3>

          <div className="info-box">
            <h4>0-1 Ay (Neonatal Dönem)</h4>
            <div style={{marginTop: '1rem'}}>
              <span className="badge badge-red">Group B Streptococcus (GBS)</span>
              <span className="badge badge-red">E. coli</span>
              <span className="badge badge-red">Listeria monocytogenes</span>
              <span className="badge badge-purple">Enterococcus spp.</span>
              <span className="badge badge-purple">Diğer Gram-negatif bakteriler</span>
            </div>
          </div>

          <div className="highlight-box">
            <h4>1-3 Ay (Postneonatal Erken Dönem)</h4>
            <div style={{marginTop: '1rem'}}>
              <span className="badge badge-blue">E. coli (İYE)</span>
              <span className="badge badge-blue">Group B Streptococcus</span>
              <span className="badge badge-blue">Streptococcus pneumoniae</span>
              <span className="badge badge-purple">Neisseria meningitidis</span>
              <span className="badge badge-purple">Haemophilus influenzae tip B</span>
              <span className="badge badge-purple">Salmonella spp.</span>
            </div>
          </div>

          <h3>İdrar Yolu Enfeksiyonu Etkenleri</h3>
          <table>
            <thead>
              <tr>
                <th>Etken</th>
                <th>Sıklık</th>
                <th>Özellikler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>E. coli</strong></td>
                <td>%75-90</td>
                <td>En sık etken, üropatojenik suşlar</td>
              </tr>
              <tr>
                <td><strong>Klebsiella</strong></td>
                <td>%5-10</td>
                <td>İkinci sıklıkta, hastane kaynaklı</td>
              </tr>
              <tr>
                <td><strong>Enterococcus</strong></td>
                <td>%2-5</td>
                <td>Anomali varlığında artış</td>
              </tr>
              <tr>
                <td><strong>Proteus</strong></td>
                <td>%2-5</td>
                <td>Özellikle erkeklerde</td>
              </tr>
            </tbody>
          </table>

          <h3>Meningit Etkenleri</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>Grup B Streptokok (GBS)</h4>
              <p><strong>%30-40</strong> - Neonatal menijitin en sık nedeni, geç başlangıçlı hastalık</p>
            </div>
            <div className="card">
              <h4>E. coli K1</h4>
              <p><strong>%20-30</strong> - İkinci sıklıkta, yüksek mortalite</p>
            </div>
            <div className="card">
              <h4>S. pneumoniae</h4>
              <p><strong>%10-15</strong> - 2 ay sonrası artar, PCV13 ile azalma</p>
            </div>
            <div className="card">
              <h4>L. monocytogenes</h4>
              <p><strong>%5-10</strong> - Neonatal dönemde, gıda kaynaklı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slayt 5: Klinik Bulgular */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 5</div>
          <h2>Klinik Bulgular ve Semptomlar</h2>
        </div>
        <div className="content">
          <div className="warning-box">
            <h3>⚠️ Kritik Nokta</h3>
            <p><strong>Ateş tek bulgu olabilir!</strong> 1-3 aylık bebeklerde ateş (≥38°C), ciddi bakteriyel enfeksiyon varlığını düşündürmelidir.</p>
          </div>

          <h3>Genel Klinik Bulgular</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>Sık Görülen Bulgular</h4>
              <ul>
                <li><strong>Ateş:</strong> ≥38°C rektal</li>
                <li><strong>İrritabilite:</strong> Aşırı huzursuzluk</li>
                <li><strong>Emmede azalma:</strong> Zayıf beslenme</li>
                <li><strong>Letarji:</strong> Uyuşukluk, aktivite azalması</li>
                <li><strong>Kusma/diyare:</strong> GIS bulguları</li>
                <li><strong>Solunum problemleri:</strong> Takipne, apne</li>
              </ul>
            </div>
            <div className="card">
              <h4>Ciddiyet Göstergeleri</h4>
              <ul>
                <li>Zayıf periferik perfüzyon</li>
                <li>Morarma (siyanoz)</li>
                <li>Fontanel bombeleşmesi</li>
                <li>Ekstremite hareketinde azalma</li>
                <li>Konvülziyonlar</li>
                <li>Peteşi/purpura</li>
              </ul>
            </div>
          </div>

          <h3>Enfeksiyon Tipine Göre Spesifik Bulgular</h3>

          <div className="highlight-box">
            <h4>Bakteriyel Meningit</h4>
            <ul>
              <li>Fontanel bombeleşmesi (geç bulgu)</li>
              <li>Yüksek perdeden ağlama</li>
              <li>Konvülziyonlar</li>
              <li>Ense sertliği (bu yaş grubunda nadir)</li>
              <li>Bilinç değişikliği, hipotoni</li>
              <li>Apne/bradikardi</li>
            </ul>
            <p style={{marginTop: '1rem', color: '#f87171'}}><strong>Not:</strong> Klasik meningit bulguları bu yaş grubunda belirsiz olabilir!</p>
          </div>

          <div className="info-box">
            <h4>İdrar Yolu Enfeksiyonu</h4>
            <ul>
              <li>Ateş (tek bulgu olabilir)</li>
              <li>Sarılık (özellikle &lt;1 ay)</li>
              <li>Emmede azalma</li>
              <li>İrritabilite</li>
              <li>Kusma</li>
              <li>Kötü koku (spesifik değil)</li>
            </ul>
            <p style={{marginTop: '1rem'}}><strong>Not:</strong> Dizüri, sık idrara çıkma gibi bulgular bu yaşta tespit edilemez</p>
          </div>

          <div className="warning-box">
            <h4>Sepsis/Bakteriyemi</h4>
            <ul>
              <li>Hipotermi veya hipertermi</li>
              <li>Perfüzyon bozukluğu (soğuk, solukluk)</li>
              <li>Taşikardi veya bradikardi</li>
              <li>Takipne veya apne</li>
              <li>Kapiller dolum zamanında uzama (&gt;3 sn)</li>
              <li>Letarji, hipotoni</li>
              <li>Beslenememe</li>
            </ul>
          </div>

          <div className="success-box">
            <h4>Pnömoni</h4>
            <ul>
              <li>Ateş</li>
              <li>Takipne (&gt;60/dk)</li>
              <li>Solunum sıkıntısı (inleme, burun kanadı solunumu)</li>
              <li>Öksürük</li>
              <li>İnterkostal/subkostal çekilmeler</li>
              <li>Beslenememe</li>
              <li>Oksijen saturasyonunda düşme</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 6: Tanı Yaklaşımı */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 6</div>
          <h2>Tanı Yaklaşımı ve Değerlendirme</h2>
        </div>
        <div className="content">
          <h3>İlk Değerlendirme Basamakları</h3>

          <div className="highlight-box">
            <h4>1. Vital Bulgular ve Fizik Muayene</h4>
            <ul>
              <li><strong>Ateş:</strong> Rektal ölçüm (aksiller yeterli değil)</li>
              <li><strong>Kalp hızı, solunum hızı:</strong> Yaşa göre değerlendirme</li>
              <li><strong>Kan basıncı:</strong> Şok bulgularında</li>
              <li><strong>Genel durum:</strong> Toksik görünüm değerlendirmesi</li>
              <li><strong>Perfüzyon:</strong> Kapiller dolum zamanı</li>
              <li><strong>Fontanel:</strong> Bombeleşme, çökme kontrolü</li>
            </ul>
          </div>

          <h3>Klinik Değerlendirme Skorları</h3>

          <table>
            <thead>
              <tr>
                <th>Kriter</th>
                <th>Düşük Risk</th>
                <th>Yüksek Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Genel görünüm</strong></td>
                <td>İyi, aktif, reaktif</td>
                <td>Toksik, letarjik, irritabl</td>
              </tr>
              <tr>
                <td><strong>Hidrasyon</strong></td>
                <td>Normal</td>
                <td>Dehidratasyon bulguları</td>
              </tr>
              <tr>
                <td><strong>Perfüzyon</strong></td>
                <td>Normal</td>
                <td>Soluk, soğuk, uzun CRT</td>
              </tr>
              <tr>
                <td><strong>Solunum</strong></td>
                <td>Normal</td>
                <td>Takipne, çekilme, apne</td>
              </tr>
              <tr>
                <td><strong>Davranış</strong></td>
                <td>Konsolide olabiliyor</td>
                <td>İnkonsolabl ağlama</td>
              </tr>
            </tbody>
          </table>

          <h3>Laboratory Değerlendirme</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>Temel Laboratuvar Tetkikleri</h4>
              <ul>
                <li><strong>Tam Kan Sayımı (CBC):</strong> Lökosit, absolü nötrofil, band formu</li>
                <li><strong>C-Reaktif Protein (CRP):</strong> Akut faz reaktanı</li>
                <li><strong>Prokalsitonin (PCT):</strong> Bakteriyel enfeksiyon markeri</li>
                <li><strong>Kan kültürü:</strong> Mutlaka alınmalı</li>
                <li><strong>İdrar analizi ve kültürü:</strong> Torba değil, kateterizasyon</li>
              </ul>
            </div>
            <div className="card">
              <h4>İlave Tetkikler (Endikasyona Göre)</h4>
              <ul>
                <li><strong>Lomber ponksiyon:</strong> BOS analizi ve kültürü</li>
                <li><strong>Akciğer grafisi:</strong> Solunum bulgusu varsa</li>
                <li><strong>Viral testler:</strong> İnfluenza, RSV, COVID-19</li>
                <li><strong>Gaita kültürü:</strong> İshal varsa</li>
                <li><strong>Biyokimya:</strong> Elektrolitler, glukoz, BUN, kreatinin</li>
              </ul>
            </div>
          </div>

          <h3>Laboratuvar Değerleri - Risk Değerlendirmesi</h3>

          <div className="info-box">
            <h4>Düşük Risk Kriterleri</h4>
            <ul>
              <li>Lökosit sayısı: 5.000-15.000/mm³</li>
              <li>Absolü nötrofil sayısı: &lt;10.000/mm³</li>
              <li>Band formu: &lt;1.500/mm³</li>
              <li>CRP: &lt;20 mg/L</li>
              <li>Prokalsitonin: &lt;0.5 ng/mL</li>
              <li>İdrar analizi: Normal</li>
              <li>BOS (yapıldıysa): Normal</li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Yüksek Risk Göstergeleri</h4>
            <ul>
              <li>Lökosit: &lt;5.000 veya &gt;15.000/mm³</li>
              <li>Absolü nötrofil: &gt;10.000/mm³</li>
              <li>I/T oranı: &gt;0.2</li>
              <li>CRP: &gt;20 mg/L (özellikle &gt;40 mg/L)</li>
              <li>Prokalsitonin: &gt;0.5 ng/mL</li>
              <li>İdrarda piyüri (&gt;5 lökosit/HPF)</li>
              <li>BOS: Patolojik bulgular</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 7: Lomber Ponksiyon */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 7</div>
          <h2>Lomber Ponksiyon ve BOS Değerlendirmesi</h2>
        </div>
        <div className="content">
          <h3>Lomber Ponksiyon Endikasyonları</h3>

          <div className="highlight-box">
            <h4>Mutlak Endikasyonlar</h4>
            <ul>
              <li>Tüm 1 ay altı ateşli bebekler</li>
              <li>Toksik görünümlü her bebek</li>
              <li>Meningit bulguları olan bebekler</li>
              <li>Pozitif kan kültürü olan hastalar</li>
              <li>Klinik olarak sepsis düşünülen hastalar</li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Göreceli Endikasyonlar (1-3 ay)</h4>
            <ul>
              <li>Yüksek enfeksiyon parametreleri (CRP &gt;40 mg/L, PCT &gt;2 ng/mL)</li>
              <li>İdrar yolu enfeksiyonu ile birlikte kötü görünüm</li>
              <li>Viral test sonuçlarına rağmen klinik kötüleşme</li>
              <li>Risk faktörlerinin birden fazla olması</li>
            </ul>
          </div>

          <div className="warning-box">
            <h4>Kontrendikasyonlar</h4>
            <ul>
              <li>Kardiyopulmoner instabilite (önce stabilize et)</li>
              <li>Lokal cilt enfeksiyonu (ponksiyon bölgesinde)</li>
              <li>Trombositopeni (&lt;50.000/mm³) veya koagülopati</li>
              <li>İntrakranial kitle veya artmış intrakranial basınç bulguları</li>
            </ul>
          </div>

          <h3>BOS Analizi - Normal Değerler (0-3 Ay)</h3>

          <table>
            <thead>
              <tr>
                <th>Parametre</th>
                <th>Normal Değer</th>
                <th>Bakteriyel Meningit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Lökosit sayısı</strong></td>
                <td>&lt;10-20/mm³</td>
                <td>&gt;100/mm³ (genellikle &gt;1000)</td>
              </tr>
              <tr>
                <td><strong>Nötrofil oranı</strong></td>
                <td>&lt;50%</td>
                <td>&gt;80%</td>
              </tr>
              <tr>
                <td><strong>Protein</strong></td>
                <td>50-150 mg/dL</td>
                <td>&gt;100-150 mg/dL</td>
              </tr>
              <tr>
                <td><strong>Glukoz</strong></td>
                <td>&gt;30 mg/dL (BOS/Kan &gt;0.5)</td>
                <td>&lt;30 mg/dL (BOS/Kan &lt;0.4)</td>
              </tr>
              <tr>
                <td><strong>Gram boyama</strong></td>
                <td>Negatif</td>
                <td>%60-90 pozitif</td>
              </tr>
              <tr>
                <td><strong>Kültür</strong></td>
                <td>Steril</td>
                <td>Pozitif (%70-90)</td>
              </tr>
            </tbody>
          </table>

          <div className="success-box">
            <h4>Önemli Notlar</h4>
            <ul>
              <li><strong>Travmatik LP:</strong> BOS'ta kan varsa her 500-1000 eritrosit için 1 lökosit düşülür</li>
              <li><strong>Kısmi tedavi:</strong> Antibiyotik alan hastalarda kültür negatif olabilir ama hücre sayısı yüksek kalır</li>
              <li><strong>Viral meningit:</strong> Lenfosit hakimiyeti, normal/hafif artmış protein, normal glukoz</li>
              <li><strong>BOS laktat:</strong> &gt;4 mmol/L bakteriyel meningiti destekler</li>
              <li><strong>Moleküler testler:</strong> PCR, özellikle kısmi tedavi almış hastalarda değerli</li>
            </ul>
          </div>

          <h3>BOS Kültürü ve Ek Testler</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>Rutin BOS Testleri</h4>
              <ul>
                <li>Hücre sayımı ve formülü</li>
                <li>Protein ve glukoz</li>
                <li>Gram boyama</li>
                <li>Kültür</li>
              </ul>
            </div>
            <div className="card">
              <h4>İlave BOS Testleri</h4>
              <ul>
                <li>Laktat (bakteriyel vs viral)</li>
                <li>Enterovirus PCR</li>
                <li>HSV PCR (ensefalit şüphesinde)</li>
                <li>Bacterial PCR panel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Slayt 8: Risk Sınıflandırma Sistemleri */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 8</div>
          <h2>Risk Sınıflandırma Sistemleri</h2>
        </div>
        <div className="content">
          <h3>Rochester Kriterleri (≤60 gün)</h3>

          <div className="success-box">
            <h4>Düşük Risk Kriterleri (Tümü Olmalı)</h4>
            <ul>
              <li>Term bebek (≥37 hafta)</li>
              <li>Hastanede kalma öyküsü yok veya anne ile aynı sürede çıkmış</li>
              <li>Kronik hastalık yok</li>
              <li>Antibiyotik tedavisi almamış</li>
              <li>İyi görünüm: Toksik değil, normalde emziyor</li>
              <li>Lökosit: 5.000-15.000/mm³</li>
              <li>Absolü band formu: ≤1.500/mm³</li>
              <li>İdrarda lökosit ≤10/HPF</li>
              <li>Diyare varsa gaitada lökosit ≤5/HPF</li>
            </ul>
            <p style={{marginTop: '1rem'}}><strong>Düşük risk belirlenen hastalarda İBE riski: &lt;%1</strong></p>
          </div>

          <h3>Philadelphia Kriterleri (29-60 gün)</h3>

          <div className="info-box">
            <h4>Düşük Risk Kriterleri</h4>
            <ul>
              <li>İyi klinik görünüm (Yale Gözlem Skoru ≤10)</li>
              <li>Lökosit: &lt;15.000/mm³</li>
              <li>Band formu: &lt;1.500/mm³</li>
              <li>BOS: &lt;8 lökosit/mm³</li>
              <li>İdrar: Negatif lökosit esteraz, negatif nitrit</li>
              <li>Gaita: Negatif (diyare varsa)</li>
              <li>Akciğer grafisi: Normal (çekildiyse)</li>
            </ul>
          </div>

          <h3>Step-by-Step Algoritm (Gomez ve ark.)</h3>

          <table>
            <thead>
              <tr>
                <th>Adım</th>
                <th>Kriter</th>
                <th>Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Adım 1</strong></td>
                <td>Kötü klinik görünüm</td>
                <td>Yüksek risk → Tam sepsis iş-up + Yatış + IV AB</td>
              </tr>
              <tr>
                <td><strong>Adım 2</strong></td>
                <td>Lökositoz (&gt;15.000) veya lökopeni (&lt;5.000)</td>
                <td>Yüksek risk → Tam iş-up + Yatış</td>
              </tr>
              <tr>
                <td><strong>Adım 3</strong></td>
                <td>Anormal idrar tahlili</td>
                <td>İdrar kültürü + Tedavi (İYE tedavisi)</td>
              </tr>
              <tr>
                <td><strong>Adım 4</strong></td>
                <td>CRP &gt;20 mg/L veya PCT &gt;0.5 ng/mL</td>
                <td>Yüksek risk → Tam iş-up + Yatış</td>
              </tr>
              <tr>
                <td><strong>Adım 5</strong></td>
                <td>Tüm kriterler negatif</td>
                <td>Düşük risk → Yakın takip + Taburcu edilebilir</td>
              </tr>
            </tbody>
          </table>

          <h3>PECARN (Pediatric Emergency Care Applied Research Network)</h3>

          <div className="highlight-box">
            <h4>Yaş Gruplarına Göre Yaklaşım</h4>

            <div style={{marginTop: '1rem'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>≤28 Gün</h4>
              <ul>
                <li>Tüm hastalarda tam sepsis iş-up (kan, idrar, BOS kültürü)</li>
                <li>Empirik antibiyotik başlanması önerilir</li>
                <li>Yatarak takip</li>
              </ul>
            </div>

            <div style={{marginTop: '1.5rem'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>29-60 Gün</h4>
              <ul>
                <li>Klinik ve laboratuvar değerlendirme</li>
                <li>Düşük risk: Seçilmiş hastalar ayaktan takip edilebilir</li>
                <li>Yüksek risk: Yatış + antibiyotik</li>
              </ul>
            </div>

            <div style={{marginTop: '1.5rem'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>61-90 Gün</h4>
              <ul>
                <li>Klinik ve laboratuvar ile risk belirleme</li>
                <li>Viral test sonuçları karar vermede yardımcı</li>
                <li>BOS analizi seçilmiş hastalarda yapılabilir</li>
              </ul>
            </div>
          </div>

          <h3>Yale Gözlem Skalası</h3>

          <table>
            <thead>
              <tr>
                <th>Gözlem</th>
                <th>Normal (1 puan)</th>
                <th>Orta (3 puan)</th>
                <th>Ciddi (5 puan)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kalite ağlama</strong></td>
                <td>Güçlü, normal ses</td>
                <td>Hıçkırıklı veya fazla yüksek</td>
                <td>Zayıf veya inleme</td>
              </tr>
              <tr>
                <td><strong>Uyarılma</strong></td>
                <td>Uyanık kalıyor</td>
                <td>Kısa uyanık</td>
                <td>Uyuyor/uyanmıyor</td>
              </tr>
              <tr>
                <td><strong>Renk</strong></td>
                <td>Pembe</td>
                <td>Ekstremite solukluk</td>
                <td>Soluk, siyanotik</td>
              </tr>
              <tr>
                <td><strong>Hidrasyon</strong></td>
                <td>Cilt normal, göz normal</td>
                <td>Ağız hafif kuru</td>
                <td>Çökük göz, kuru mukoza</td>
              </tr>
              <tr>
                <td><strong>Sosyal yanıt</strong></td>
                <td>Gülümsüyor</td>
                <td>Kısa gülümseme</td>
                <td>Gülümsemiyor</td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '1rem', color: '#60a5fa'}}><strong>Toplam skor ≤10:</strong> Düşük risk | <strong>&gt;10:</strong> Yüksek risk</p>
        </div>
      </div>

      {/* Slayt 9: Tedavi Yaklaşımı */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 9</div>
          <h2>Empirik Antibiyotik Tedavisi</h2>
        </div>
        <div className="content">
          <h3>Yaş Gruplarına Göre Antibiyotik Seçimi</h3>

          <div className="warning-box">
            <h4>≤28 Gün (Neonatal Dönem)</h4>
            <div style={{marginTop: '1rem'}}>
              <p><strong>Standart Tedavi:</strong></p>
              <ul>
                <li><span className="badge badge-red">Ampisilin</span> 200-300 mg/kg/gün (her 6-8 saatte)</li>
                <li><span className="badge badge-red">Gentamisin</span> 4-5 mg/kg/gün (her 24 saatte) VEYA</li>
                <li><span className="badge badge-red">Sefotaksim</span> 200 mg/kg/gün (her 6-8 saatte)</li>
              </ul>
              <p style={{marginTop: '1rem'}}><strong>Neden bu kombinasyon?</strong></p>
              <ul>
                <li>Ampisilin: GBS, Enterococcus, Listeria etkinliği</li>
                <li>Gentamisin/Sefotaksim: Gram-negatif bakteriler (E. coli, Klebsiella)</li>
              </ul>
            </div>
          </div>

          <div className="highlight-box">
            <h4>29-90 Gün</h4>
            <div style={{marginTop: '1rem'}}>
              <p><strong>Standart Tedavi:</strong></p>
              <ul>
                <li><span className="badge badge-blue">Seftriakson</span> 50-100 mg/kg/gün (tek doz, maksimum 2 g)</li>
                <li><strong>VEYA</strong></li>
                <li><span className="badge badge-blue">Sefotaksim</span> 150-200 mg/kg/gün (her 6-8 saatte)</li>
              </ul>
              <p style={{marginTop: '1rem'}}><strong>Listeria riski varsa (yüksek risk faktörleri):</strong></p>
              <ul>
                <li>Yukarıdaki tedaviye <span className="badge badge-purple">Ampisilin</span> ekle</li>
              </ul>
            </div>
          </div>

          <h3>Enfeksiyon Odağına Göre Tedavi</h3>

          <table>
            <thead>
              <tr>
                <th>Tanı</th>
                <th>İlk Seçenek</th>
                <th>Tedavi Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bakteriyel Meningit</strong></td>
                <td>
                  ≤28 gün: Ampisilin + Gentamisin/Sefotaksim<br/>
                  &gt;28 gün: Seftriakson + Ampisilin (risk varsa)
                </td>
                <td>
                  GBS: 14 gün<br/>
                  Gram (-): 21 gün<br/>
                  Listeria: 14-21 gün
                </td>
              </tr>
              <tr>
                <td><strong>Bakteriyemi (Odaksız)</strong></td>
                <td>
                  ≤28 gün: Ampisilin + Gentamisin<br/>
                  &gt;28 gün: Seftriakson
                </td>
                <td>10-14 gün</td>
              </tr>
              <tr>
                <td><strong>İdrar Yolu Enfeksiyonu</strong></td>
                <td>
                  ≤28 gün: Ampisilin + Gentamisin<br/>
                  &gt;28 gün: Seftriakson
                </td>
                <td>7-14 gün (sistite 7-10, piyelite 10-14)</td>
              </tr>
              <tr>
                <td><strong>Pnömoni</strong></td>
                <td>
                  Seftriakson/Sefotaksim<br/>
                  Atipik şüphesinde: + Azitromisin
                </td>
                <td>10 gün</td>
              </tr>
            </tbody>
          </table>

          <h3>Özel Durumlar</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>HSV Ensefaliti Şüphesi</h4>
              <ul>
                <li><strong>Asiklovir</strong> 60 mg/kg/gün (her 8 saatte)</li>
                <li>Endikasyon: Konvülzyon, vezikül, maternal HSV, anormal BOS</li>
                <li>BOS HSV PCR beklerken başla</li>
                <li>Pozitifse 21 gün tedavi</li>
              </ul>
            </div>
            <div className="card">
              <h4>Direnç Şüphesi</h4>
              <ul>
                <li><strong>ESBL üretici Gram (-):</strong> Karbapenem (meropenem)</li>
                <li><strong>Ampisilin-dirençli Enterococcus:</strong> Vankomisin</li>
                <li><strong>Pnömokok direnci:</strong> Vankomisin + Seftriakson</li>
              </ul>
            </div>
          </div>

          <h3>Tedavi Değişikliği - Kültür Sonrası</h3>

          <div className="success-box">
            <h4>Kültür Sonuçlarına Göre Daraltma</h4>
            <ul>
              <li><strong>GBS:</strong> Penisilin G veya Ampisilin</li>
              <li><strong>E. coli (duyarlı):</strong> Ampisilin veya Seftriakson</li>
              <li><strong>Listeria:</strong> Ampisilin (± Gentamisin ilk 5-7 gün)</li>
              <li><strong>S. pneumoniae:</strong> Duyarlılığa göre Penisilin veya Seftriakson</li>
              <li><strong>Enterococcus:</strong> Ampisilin (duyarlıysa)</li>
            </ul>
          </div>

          <h3>Tedavi Yanıtı Değerlendirme</h3>
          <div className="info-box">
            <ul>
              <li><strong>24-48 saat:</strong> Klinik iyileşme beklenir (ateş düşmesi, genel durum düzelmesi)</li>
              <li><strong>48-72 saat:</strong> Kültür sonuçları değerlendirilir, tedavi daraltılır</li>
              <li><strong>Yanıt yoksa:</strong> Kompe likasyonlar (apse, odak varlığı), direnç, yanlış tanı değerlendir</li>
              <li><strong>CRP/PCT:</strong> 24-48 saat sonra tekrar bakılabilir (düşme beklenir)</li>
              <li><strong>Meningitte:</strong> 24-48 saat sonra kontrol LP gerekebilir</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 10: Yatış ve Takip */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 10</div>
          <h2>Yatış Kriterleri ve Takip Stratejileri</h2>
        </div>
        <div className="content">
          <h3>Yatış Endikasyonları</h3>

          <div className="warning-box">
            <h4>Mutlak Yatış Endikasyonları</h4>
            <ul>
              <li>Tüm ≤28 günlük ateşli bebekler</li>
              <li>Toksik görünümlü tüm bebekler</li>
              <li>Kanıtlanmış İBE (pozitif kültür)</li>
              <li>Bakteriyel meningit şüphesi veya tanısı</li>
              <li>Sepsis bulguları</li>
              <li>Dehidratasyon (oral alım yapamayan)</li>
              <li>Hipoksi, takipne, apne</li>
              <li>Sosyal endikasyonlar (takip güvencesi yok)</li>
            </ul>
          </div>

          <div className="info-box">
            <h4>Seçici Yatış (29-90 Gün - Göreceli Endikasyonlar)</h4>
            <ul>
              <li>Yüksek risk kriterleri (Rochester, Philadelphia negatif)</li>
              <li>Yüksek CRP/PCT değerleri</li>
              <li>İdrar yolu enfeksiyonu + genç yaş (&lt;60 gün)</li>
              <li>Aile uyumsuzluğu veya takip güvencesizliği</li>
              <li>İlk antibiyotik dozu sonrası gözlem</li>
              <li>BOS analizi sonuçları beklenirken</li>
            </ul>
          </div>

          <h3>Ayaktan Takip Kriterleri</h3>

          <div className="success-box">
            <h4>Ayaktan Takip Edilebilecek Hastalar (Seçilmiş 29-90 Gün)</h4>
            <p style={{marginBottom: '1rem'}}>Tüm kriterler birlikte sağlanmalı:</p>
            <ul>
              <li>İyi klinik görünüm (Yale skoru ≤10)</li>
              <li>Düşük risk kriterleri pozitif (Rochester/Philadelphia)</li>
              <li>Normal laboratuvar bulguları</li>
              <li>Negatif viral test pozitif olabilir (influenza, RSV vb.)</li>
              <li>BOS değerlendirmesi yapılmış ve normal (veya yapılmamış ama düşük risk)</li>
              <li>İlk doz antibiyotik acilde verilmiş (seftriakson 50 mg/kg IM)</li>
              <li>24 saat içinde güvenilir takip garantisi</li>
              <li>Aile uyumlu ve ulaşılabilir</li>
            </ul>
          </div>

          <h3>Takip Protokolleri</h3>

          <table>
            <thead>
              <tr>
                <th>Hasta Grubu</th>
                <th>İlk Takip</th>
                <th>İzlem Sıklığı</th>
                <th>Sonlandırma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Yüksek Risk / Yatan</strong></td>
                <td>Her 4-6 saat vital, klinik değerlendirme</td>
                <td>Günlük tam muayene, gerekirse lab kontrolü</td>
                <td>Ateşsiz 24-48 saat + iyi görünüm + negatif kültür</td>
              </tr>
              <tr>
                <td><strong>Düşük Risk / Ayaktan</strong></td>
                <td>24 saat içinde kontrol (klinik veya telefon)</td>
                <td>48 saat sonra yeniden değerlendirme</td>
                <td>Kültür negatif + klinik iyileşme</td>
              </tr>
              <tr>
                <td><strong>İYE (komplike olmayan)</strong></td>
                <td>48-72 saat klinik takip</td>
                <td>Oral antibiyotik uyumu kontrol</td>
                <td>Tedavi sonrası 1-2 hafta kontrol</td>
              </tr>
              <tr>
                <td><strong>Meningit</strong></td>
                <td>Sürekli monitorizasyon (YBÜ)</td>
                <td>Nörolojik muayene günlük</td>
                <td>Tam tedavi + kontrol LP + nöroloji konsültasyonu</td>
              </tr>
            </tbody>
          </table>

          <h3>İyileşme Kriterleri</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>Klinik İyileşme Bulguları</h4>
              <ul>
                <li>Ateş ≥24-48 saattir yok</li>
                <li>İyi genel görünüm</li>
                <li>Normal beslenme</li>
                <li>Sosyal etkileşim normale dönmüş</li>
                <li>Vital bulgular stabil</li>
                <li>Odak-spesifik bulguların düzelmesi</li>
              </ul>
            </div>
            <div className="card">
              <h4>Laboratuvar İyileşme Bulguları</h4>
              <ul>
                <li>Kan kültürleri negatif (48-72 saat)</li>
                <li>CRP/PCT düşüş trendi</li>
                <li>Lökosit normalizasyonu</li>
                <li>BOS sterilizasyonu (meningit)</li>
                <li>İdrar kültürü negatif (İYE)</li>
              </ul>
            </div>
          </div>

          <h3>Taburculuk Kriterleri</h3>

          <div className="highlight-box">
            <h4>Güvenli Taburculuk için Gerekli Koşullar</h4>
            <ul>
              <li><strong>Klinik stabilite:</strong> En az 24 saat ateşsiz, iyi genel durum</li>
              <li><strong>Oral alım:</strong> Yeterli beslenme ve hidrasyon</li>
              <li><strong>Kültür sonuçları:</strong> 48-72 saat negatif veya tanımlı patojen + uygun tedavi</li>
              <li><strong>Oral tedaviye geçiş:</strong> Mümkünse ve uygunsa (İYE gibi)</li>
              <li><strong>Aile eğitimi:</strong> İlaç kullanımı, alarm bulguları, takip planı</li>
              <li><strong>Takip garantisi:</strong> 24-48 saat içinde poliklinik kontrolü</li>
              <li><strong>Sosyal uygunluk:</strong> Güvenli ev ortamı, ulaşım imkanı</li>
            </ul>
          </div>

          <h3>Takipte Alarm Bulguları</h3>

          <div className="warning-box">
            <h4>⚠️ Acil Değerlendirme Gerektiren Bulgular</h4>
            <p>Aile bu bulgulardan herhangi birini gözlerse hemen hastaneye dönmeliler:</p>
            <ul>
              <li>Ateş yeniden yükseldi (≥38°C)</li>
              <li>Letarji, uyandırılamama</li>
              <li>Emmede azalma/reddi</li>
              <li>Konvülziyonlar</li>
              <li>Solunum güçlüğü, morarma</li>
              <li>İnkonsolabl ağlama</li>
              <li>Fontanel bombeleşmesi</li>
              <li>Döküntü (özellikle peteşi/purpura)</li>
              <li>Kusma-diyare ile birlikte dehidratasyon</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 11: Komplikasyonlar */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 11</div>
          <h2>Komplikasyonlar ve Uzun Dönem Sonuçlar</h2>
        </div>
        <div className="content">
          <h3>Akut Komplikasyonlar</h3>

          <div className="warning-box">
            <h4>Bakteriyel Meningit Komplikasyonları</h4>
            <div className="grid grid-2" style={{marginTop: '1rem'}}>
              <div>
                <p><strong>Akut Dönem:</strong></p>
                <ul>
                  <li>Subdural efüzyon/empiyem</li>
                  <li>Serebral ödem</li>
                  <li>Hidrosefali</li>
                  <li>Ventrikülit</li>
                  <li>Beyin absesi</li>
                  <li>Konvülziyonlar</li>
                  <li>SIADH</li>
                  <li>Kranial sinir felçleri</li>
                </ul>
              </div>
              <div>
                <p><strong>Uzun Dönem:</strong></p>
                <ul>
                  <li>İşitme kaybı (%30-40)</li>
                  <li>Gelişimsel gecikme</li>
                  <li>Epilepsi</li>
                  <li>Kognitif bozukluklar</li>
                  <li>Motor defisitler</li>
                  <li>Davranışsal problemler</li>
                  <li>Öğrenme güçlükleri</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="warning-box">
            <h4>Sepsis/Septik Şok Komplikasyonları</h4>
            <ul>
              <li><strong>Kardiyovasküler:</strong> Şok, miyokardit, aritmi</li>
              <li><strong>Solunum:</strong> ARDS, plevral efüzyon</li>
              <li><strong>Renal:</strong> Akut böbrek yetmezliği</li>
              <li><strong>Hematolojik:</strong> DIC, trombositopeni</li>
              <li><strong>Metabolik:</strong> Hipoglisemi, asidoz, elektrolit bozuklukları</li>
              <li><strong>Hepatik:</strong> Kolestaz, transaminaz yüksekliği</li>
              <li><strong>Nörolojik:</strong> Ensefalopati, konvülziyon</li>
            </ul>
          </div>

          <h3>İdrar Yolu Enfeksiyonu Komplikasyonları</h3>

          <table>
            <thead>
              <tr>
                <th>Komplikasyon</th>
                <th>Risk Faktörleri</th>
                <th>Yönetim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Renal skar</strong></td>
                <td>Rekürren İYE, VUR, geç tedavi</td>
                <td>DMSA sintigrafisi, profilaksi</td>
              </tr>
              <tr>
                <td><strong>Ürosepsis</strong></td>
                <td>Obstrüksiyon, VUR, immünsüpresyon</td>
                <td>IV antibiyotik, üroloji konsültasyonu</td>
              </tr>
              <tr>
                <td><strong>Renal apse</strong></td>
                <td>Komplike İYE, hematojen yayılım</td>
                <td>Uzun süreli antibiyotik, drenaj</td>
              </tr>
              <tr>
                <td><strong>Hipertansiyon</strong></td>
                <td>Kronik parankimal hasar</td>
                <td>Uzun dönem takip</td>
              </tr>
            </tbody>
          </table>

          <h3>Mortalite Oranları</h3>

          <div className="info-box">
            <h4>Enfeksiyon Tipine Göre Mortalite</h4>
            <ul>
              <li><strong>Bakteriyel Meningit:</strong> %5-15 (GBS), %10-20 (Gram-negatif)</li>
              <li><strong>Sepsis:</strong> %10-25 (erken tanı ve tedavi ile azalır)</li>
              <li><strong>İdrar Yolu Enfeksiyonu:</strong> &lt;%1 (komplike olmayan)</li>
              <li><strong>Pnömoni:</strong> %1-5 (destek tedavisine göre değişir)</li>
            </ul>
          </div>

          <h3>Prognoz ve İzlem</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>İyi Prognoz Faktörleri</h4>
              <ul>
                <li>Erken tanı ve tedavi</li>
                <li>İyi başlangıç klinik durumu</li>
                <li>Uygun antibiyotik seçimi</li>
                <li>İYE veya lokalize enfeksiyon</li>
                <li>Negatif BOS kültürü</li>
                <li>Hızlı klinik yanıt</li>
              </ul>
            </div>
            <div className="card">
              <h4>Kötü Prognoz Faktörleri</h4>
              <ul>
                <li>Geç başvuru (&gt;24 saat)</li>
                <li>Şok varlığı</li>
                <li>Gram-negatif meningit</li>
                <li>Konvülziyonlar</li>
                <li>Çok düşük/yüksek lökosit</li>
                <li>DIC, çoklu organ yetmezliği</li>
              </ul>
            </div>
          </div>

          <h3>Uzun Dönem Takip Gereksinimleri</h3>

          <div className="highlight-box">
            <h4>Meningit Geçiren Hastalar</h4>
            <ul>
              <li><strong>İşitme testi:</strong> Taburculuk öncesi/3 ay sonra ABR veya odyoloji</li>
              <li><strong>Nörolojik değerlendirme:</strong> 1, 3, 6, 12 ay</li>
              <li><strong>Gelişimsel izlem:</strong> Denver II veya benzeri testler</li>
              <li><strong>Görüntüleme:</strong> MRI (sekeli değerlendirme, 6-12 ay)</li>
              <li><strong>Fizik tedavi:</strong> Motor gecikme varsa</li>
            </ul>
          </div>

          <div className="success-box">
            <h4>İYE Geçiren Hastalar</h4>
            <ul>
              <li><strong>Ultrasonografi:</strong> 1-2 hafta içinde renal anomali taraması</li>
              <li><strong>VCUG:</strong> İlk İYE sonrası (özellikle &lt;2 yaş, erkek, anormal USG)</li>
              <li><strong>DMSA:</strong> 4-6 ay sonra renal skar değerlendirmesi</li>
              <li><strong>Antibiyotik profilaksisi:</strong> VUR varsa veya rekürren İYE</li>
              <li><strong>Üroloji/Nefroloji takibi:</strong> Anomali veya skar varlığında</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 12: Önleme Stratejileri */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 12</div>
          <h2>Önleme ve Korunma Stratejileri</h2>
        </div>
        <div className="content">
          <h3>Aşılama Programları</h3>

          <div className="success-box">
            <h4>İnvaziv Bakteriyel Enfeksiyonları Önleyen Aşılar</h4>
            <table style={{marginTop: '1rem'}}>
              <thead>
                <tr>
                  <th>Aşı</th>
                  <th>Hedef</th>
                  <th>Zamanlama</th>
                  <th>Etki</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PCV13 (Prevenar 13)</strong></td>
                  <td>S. pneumoniae (13 serotip)</td>
                  <td>2, 4, 6, 12-15 ay</td>
                  <td>İnvaziv pnömokoksik hastalıkta %90 azalma</td>
                </tr>
                <tr>
                  <td><strong>Hib (H. influenzae tip b)</strong></td>
                  <td>H. influenzae tip b</td>
                  <td>2, 4, 6, 12-18 ay</td>
                  <td>İnvaziv Hib hastalığında %99 azalma</td>
                </tr>
                <tr>
                  <td><strong>Meningokokal (konjuge)</strong></td>
                  <td>N. meningitidis</td>
                  <td>11-12 yaş (rutin), risk varsa erken</td>
                  <td>Serogrup spesifik koruma</td>
                </tr>
                <tr>
                  <td><strong>Influenza</strong></td>
                  <td>İnfluenza virüsü</td>
                  <td>≥6 ay, yıllık</td>
                  <td>Sekonder bakteriyel enfeksiyonu azaltır</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Maternal ve Perinatal Önlemler</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>Grup B Streptokok (GBS) Profilaksisi</h4>
              <ul>
                <li><strong>Tarama:</strong> Tüm gebelere 35-37. haftalarda rektovajinal kültür</li>
                <li><strong>İntrapartum antibiyotik:</strong> GBS (+) gebelere doğumda IV penisilin/ampisilin</li>
                <li><strong>Risk faktörleri:</strong> Önceki GBS enfeksiyonlu bebek, GBS bakteriürisi, kültür bilinmiyor + risk faktörleri</li>
                <li><strong>Etki:</strong> Erken başlangıçlı GBS hastalığında %80 azalma</li>
              </ul>
            </div>
            <div className="card">
              <h4>Diğer Perinatal Önlemler</h4>
              <ul>
                <li>Prolonge membran rüptüründe (&gt;18 saat) antibiyotik</li>
                <li>Maternal enfeksiyon tedavisi</li>
                <li>Aseptik doğum uygulamaları</li>
                <li>Erken kordon klempleme yerine geç (≥30-60 sn)</li>
                <li>Erken anne sütü ve cilt teması</li>
              </ul>
            </div>
          </div>

          <h3>Anne Sütü ve Beslenme</h3>

          <div className="highlight-box">
            <h4>Anne Sütünün Koruyucu Etkileri</h4>
            <ul>
              <li><strong>İmmünoglobulinler:</strong> IgA, IgG, IgM - pasif immünite</li>
              <li><strong>Laktoferrin:</strong> Demir bağlayarak bakteri üremesini engeller</li>
              <li><strong>Lizozim:</strong> Bakteriyel hücre duvarını parçalar</li>
              <li><strong>Oligosakkaritler:</strong> Prebiyotik etki, patojen bağlanmasını engeller</li>
              <li><strong>Lökositler:</strong> Canlı immün hücreler</li>
              <li><strong>İstatistik:</strong> Sadece anne sütü alan bebeklerde İBE riski %2-3 kat daha düşük</li>
            </ul>
          </div>

          <h3>Enfeksiyon Kontrolü</h3>

          <div className="info-box">
            <h4>Hastane ve Toplum Bazlı Önlemler</h4>
            <ul>
              <li><strong>El hijyeni:</strong> En önemli önleyici uygulama</li>
              <li><strong>Temaslı önlemleri:</strong> Bilinen enfeksiyonlu bebekler için</li>
              <li><strong>Aseptik kateterizasyon:</strong> İdrar kültürü alımında kontaminasyonu önler</li>
              <li><strong>İnvaziv işlemlerde sterilite:</strong> Lomber ponksiyon, kateter yerleştirme</li>
              <li><strong>Hasta izolasyonu:</strong> RSV, influenza gibi viral enfeksiyonlarda</li>
              <li><strong>Ziyaretçi kısıtlaması:</strong> Yenidoğan yoğun bakım ünitelerinde</li>
            </ul>
          </div>

          <h3>Antibiyotik Profilaksisi</h3>

          <table>
            <thead>
              <tr>
                <th>Endikasyon</th>
                <th>Profilaksi</th>
                <th>Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vezikoüreteral reflü (VUR)</strong></td>
                <td>Trimetoprim-sulfametoksazol veya nitrofurantoin</td>
                <td>Reflü düzelse veya cerrahi tedaviye kadar</td>
              </tr>
              <tr>
                <td><strong>Rekürren İYE</strong></td>
                <td>Düşük doz günlük antibiyotik</td>
                <td>6-12 ay, tekrar değerlendirme</td>
              </tr>
              <tr>
                <td><strong>Meningokokal temas</strong></td>
                <td>Rifampin veya seftriakson</td>
                <td>Tek doz/2 gün</td>
              </tr>
              <tr>
                <td><strong>Aspleni/fonksiyonel aspleni</strong></td>
                <td>Penisilin V profilaksisi</td>
                <td>≥5 yaşına kadar</td>
              </tr>
            </tbody>
          </table>

          <h3>Aile Eğitimi</h3>

          <div className="success-box">
            <h4>Ailelere Verilecek Önemli Mesajlar</h4>
            <ul>
              <li><strong>Ateş yönetimi:</strong> 3 aydan küçüklerde ateş hemen değerlendirilmeli</li>
              <li><strong>Alarm bulguları:</strong> Letarji, emmede azalma, solunum zorluğu → acile</li>
              <li><strong>El hijyeni:</strong> Bakım öncesi/sonrası mutlaka eller yıkanmalı</li>
              <li><strong>Aşı takvimi:</strong> Zamanında ve eksiksiz aşılama</li>
              <li><strong>Anne sütü:</strong> İlk 6 ay sadece anne sütü önerilir</li>
              <li><strong>Hasta ziyaretleri:</strong> Enfeksiyonlu kişilerden bebek uzak tutulmalı</li>
              <li><strong>Sigara dumanı:</strong> Pasif içicilikten kaçınma</li>
              <li><strong>Düzenli takip:</strong> Sağlam çocuk muayeneleri aksatılmamalı</li>
            </ul>
          </div>

          <h3>Gelecek Perspektifler</h3>

          <div className="highlight-box">
            <h4>Geliştirilmekte Olan Önleme Stratejileri</h4>
            <ul>
              <li><strong>GBS maternal aşısı:</strong> Faz 3 çalışmalarda, gebede kullanım için</li>
              <li><strong>RSV monoklonal antikor:</strong> Nirsevimab - tüm bebekler için profilaksi</li>
              <li><strong>Geniş spektrumlu pnömokok aşıları:</strong> PCV15, PCV20</li>
              <li><strong>Meningokokal B aşısı:</strong> Yüksek riskli bebeklerde kullanım</li>
              <li><strong>E. coli aşısı:</strong> İYE önleme için araştırma aşamasında</li>
              <li><strong>Probiyotikler:</strong> İmmün modülasyon ve patojen inhibisyonu</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slayt 13: Güncel Kontroversler */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 13</div>
          <h2>Güncel Tartışmalar ve Kontroversler</h2>
        </div>
        <div className="content">
          <h3>1. Lomber Ponksiyon: Herkese mi, Seçilmişlere mi?</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4 style={{color: '#4ade80'}}>✓ Rutin LP Taraftarları</h4>
              <ul>
                <li>Meningit klinik olarak ayırt edilemeyebilir</li>
                <li>Bakteriyemili hastaların %10-15'inde meningit var</li>
                <li>Atlanmış meningit ciddi sekelle sonuçlanır</li>
                <li>≤28 günde mutlaka yapılmalı</li>
                <li>CRP/PCT meningiti ekarte ettirmez</li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{color: '#f87171'}}>✗ Seçici LP Taraftarları</h4>
              <ul>
                <li>Düşük riskli bebeklerde meningit nadir (%0.2-0.5)</li>
                <li>LP invaziv, komplikasyon riski var</li>
                <li>İyi risk skorları güvenle kullanılabilir</li>
                <li>Viral test pozitifliği LP ihtiyacını azaltır</li>
                <li>Klinik ve biyomarkırlar yönlendirici olabilir</li>
              </ul>
            </div>
          </div>

          <div className="info-box">
            <h4>Güncel Konsensüs</h4>
            <p><strong>≤28 gün:</strong> Lomber ponksiyon rutin önerilir</p>
            <p><strong>29-60 gün:</strong> Düşük risk kriterleri sağlıyorsa ve viral test pozitifse seçici yaklaşılabilir</p>
            <p><strong>61-90 gün:</strong> Klinik ve laboratuvar bulgularına göre karar verilir</p>
          </div>

          <h3>2. Viral Testlerin Rolü</h3>

          <div className="highlight-box">
            <h4>Viral Test Pozitifliği → Bakteriyel Enfeksiyonu Ekarte Eder mi?</h4>

            <div style={{marginTop: '1rem'}}>
              <p><strong>Tartışma:</strong></p>
              <ul>
                <li>Viral enfeksiyon varlığında İBE riski azalır (%2'den %0.5'e)</li>
                <li>Ancak ko-enfeksiyon mümkün (%1-3 hastada viral + bakteriyel birlikte)</li>
                <li>RSV, influenza pozitif bebekler daha düşük risk taşır</li>
                <li>Ancak viral test pozitifliği tek başına LP'yi önlemez</li>
              </ul>
            </div>

            <div style={{marginTop: '1.5rem'}}>
              <p><strong>Öneriler:</strong></p>
              <ul>
                <li>Viral testler risk sınıflandırmasında yardımcı olabilir</li>
                <li>Pozitif viral test + düşük risk = daha az agresif yaklaşım</li>
                <li>Yine de klinik ve laboratuvar bulguları değerlendirmeli</li>
                <li>Viral test negatifliği yönetimi değiştirmez</li>
              </ul>
            </div>
          </div>

          <h3>3. Prokalsitonin vs CRP: Hangisi Daha İyi?</h3>

          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Prokalsitonin (PCT)</th>
                <th>C-Reaktif Protein (CRP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Spesifisite</strong></td>
                <td>Bakteriyel enfeksiyona daha spesifik</td>
                <td>Viral enfeksiyonda da yükselebilir</td>
              </tr>
              <tr>
                <td><strong>Yükselme zamanı</strong></td>
                <td>2-4 saat</td>
                <td>6-12 saat</td>
              </tr>
              <tr>
                <td><strong>Cut-off değer</strong></td>
                <td>&gt;0.5 ng/mL (bazıları &gt;0.3 önerir)</td>
                <td>&gt;20 mg/L (bazıları &gt;40 önerir)</td>
              </tr>
              <tr>
                <td><strong>Maliyet</strong></td>
                <td>Daha pahalı</td>
                <td>Daha ucuz</td>
              </tr>
              <tr>
                <td><strong>Yaygınlık</strong></td>
                <td>Tüm merkezlerde yok</td>
                <td>Her yerde mevcut</td>
              </tr>
              <tr>
                <td><strong>Performans</strong></td>
                <td>Sensitivite %85-90, spesifisite %70-80</td>
                <td>Sensitivite %70-80, spesifisite %60-70</td>
              </tr>
            </tbody>
          </table>

          <div className="success-box">
            <h4>Pratikte Ne Yapmalı?</h4>
            <ul>
              <li><strong>İkisi birlikte:</strong> En yüksek tanısal değer kombinasyonda</li>
              <li><strong>PCT öncelikli:</strong> Varsa bakteriyel enfeksiyonu ayırmada daha iyi</li>
              <li><strong>CRP yeterli:</strong> PCT yoksa CRP tek başına kullanılabilir</li>
              <li><strong>Hiçbiri mükemmel değil:</strong> Klinik değerlendirme önceliklidir</li>
            </ul>
          </div>

          <h3>4. Hastane Yatış vs Ayaktan Tedavi</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4>Geniş Yatış (Geleneksel Yaklaşım)</h4>
              <ul>
                <li><strong>Avantaj:</strong> Güvenli, komplikasyon izlemi kolay</li>
                <li><strong>Dezavantaj:</strong> Hastane maliyeti, aile stres, nozokomiyal enfeksiyon riski</li>
                <li><strong>Endikasyon:</strong> Tüm ≤28 gün, yüksek risk 1-3 ay</li>
              </ul>
            </div>
            <div className="card">
              <h4>Seçici Ayaktan Tedavi (Modern Yaklaşım)</h4>
              <ul>
                <li><strong>Avantaj:</strong> Maliyet düşük, aile rahat, hastane enfeksiyonu yok</li>
                <li><strong>Dezavantaj:</strong> Kötüleşme izlemi zor, aile uyumu gerekli</li>
                <li><strong>Endikasyon:</strong> 29-90 gün, düşük risk, güvenilir takip</li>
              </ul>
            </div>
          </div>

          <div className="warning-box">
            <h4>⚠️ Kritik Nokta</h4>
            <p>Ayaktan tedavi ancak <strong>çok seçici</strong> hastalarda ve aşağıdaki koşullarda güvenlidir:</p>
            <ul>
              <li>Tüm düşük risk kriterleri sağlanıyor</li>
              <li>İlk doz parenteral antibiyotik verilmiş (IM/IV seftriakson)</li>
              <li>24 saat içinde garantili takip var</li>
              <li>Aile uyumlu, alarm bulgularını biliyor</li>
              <li>Hastaneye kolay ulaşım mevcut</li>
            </ul>
          </div>

          <h3>5. Ampisilin Ekleme Yaşı</h3>

          <div className="info-box">
            <h4>Listeria monocytogenes: Hangi Yaşa Kadar Risk?</h4>
            <ul>
              <li><strong>Geleneksel:</strong> &lt;1 ay → Ampisilin mutlaka (Listeria kapsamı için)</li>
              <li><strong>Tartışmalı:</strong> 1-3 ay → Bazıları ampisilin eklerken, bazıları risk düşük der</li>
              <li><strong>Güncel veriler:</strong> 1-3 ayda Listeria çok nadir (%0.5-1)</li>
              <li><strong>Konsensüs:</strong>
                <ul>
                  <li>≤28 gün: Ampisilin + Gentamisin/Sefotaksim</li>
                  <li>29-90 gün: Seftriakson yeterli, risk faktörü varsa ampisilin ekle</li>
                </ul>
              </li>
            </ul>
          </div>

          <h3>6. Seftriakson vs Sefotaksim</h3>

          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Seftriakson</th>
                <th>Sefotaksim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dozaj</strong></td>
                <td>Günde 1 kez (50-100 mg/kg)</td>
                <td>Günde 3-4 kez (150-200 mg/kg/gün)</td>
              </tr>
              <tr>
                <td><strong>Avantaj</strong></td>
                <td>Kolay uygulama, ayaktan tedavide tercih</td>
                <td>Neonatal dönemde daha güvenli</td>
              </tr>
              <tr>
                <td><strong>Dezavantaj</strong></td>
                <td>Hiperbilirubinemi riski (≤28 gün CI)</td>
                <td>Sık doz, IV erişim gerekli</td>
              </tr>
              <tr>
                <td><strong>Kullanım</strong></td>
                <td>&gt;28 gün tercih edilir</td>
                <td>≤28 gün tercih edilir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Slayt 14: Özel Durumlar */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 14</div>
          <h2>Özel Durumlar ve Klinik Senaryolar</h2>
        </div>
        <div className="content">
          <h3>1. Prematüre Bebeklerde İBE</h3>

          <div className="warning-box">
            <h4>Prematürelerde Özel Durumlar</h4>
            <ul>
              <li><strong>Artmış risk:</strong> İmmün sistem immatüritesi nedeniyle 2-3 kat daha yüksek İBE riski</li>
              <li><strong>Farklı etkenler:</strong> Koagülaz-negatif stafilokoklar, Candida, nozokomiyal patojenler</li>
              <li><strong>Atipik bulgular:</strong> Apne, bradikardi, hipotermi, glisemi bozuklukları</li>
              <li><strong>Düzeltilmiş yaş:</strong> Postmenstruel yaş 44 haftadan küçükse yenidoğan gibi yaklaş</li>
              <li><strong>Antibiyotik seçimi:</strong> Ampisilin + Gentamisin, hastane kökenli şüphesinde vankomisin ekle</li>
            </ul>
          </div>

          <h3>2. Kısmi Antibiyotik Tedavisi Almış Bebekler</h3>

          <div className="info-box">
            <h4>Tanı ve Yönetim Zorlukları</h4>
            <ul>
              <li><strong>Klinik maskeleme:</strong> Semptomlar hafifleyebilir ama enfeksiyon devam eder</li>
              <li><strong>Kültür negatifliği:</strong> Bakteriyemi/meningit kültürleri yalancı negatif olabilir</li>
              <li><strong>BOS bulguları:</strong> Hücre sayısı ve protein yüksek kalır, gram boyama ve kültür negatifleşebilir</li>
              <li><strong>Yaklaşım:</strong>
                <ul>
                  <li>Antibiyotik dozunu ve süresini tam tut</li>
                  <li>Klinik yanıt değerlendirmesi önemli</li>
                  <li>BOS PCR/moleküler testler değerli</li>
                  <li>Kontrol LP düşün (özellikle meningit şüphesinde)</li>
                </ul>
              </li>
            </ul>
          </div>

          <h3>3. İmmün Yetmezlikli veya Kronik Hastalıklı Bebekler</h3>

          <table>
            <thead>
              <tr>
                <th>Durum</th>
                <th>Risk Artışı</th>
                <th>Özel Yaklaşım</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Konjenital kalp hastalığı</strong></td>
                <td>Bakteriyemi, endokardit</td>
                <td>Kan kültürü mutlaka, ekokardiyografi düşün</td>
              </tr>
              <tr>
                <td><strong>Nörolojik anomali (hidrosefali, VP şant)</strong></td>
                <td>Meningit, şant enfeksiyonu</td>
                <td>LP + BOS şant rezervuarından, nöroşirürji konsültasyonu</td>
              </tr>
              <tr>
                <td><strong>Üriner sistem anomalisi</strong></td>
                <td>Komplike İYE, ürosepsis</td>
                <td>Ultrasonografi, uzun süreli tedavi, üroloji takibi</td>
              </tr>
              <tr>
                <td><strong>Prematürite + BPD</strong></td>
                <td>Pnömoni, sepsis</td>
                <td>Akciğer grafisi, solunum desteği hazır</td>
              </tr>
              <tr>
                <td><strong>İmmün yetmezlik</strong></td>
                <td>Atipik/fırsatçı patojenler</td>
                <td>Geniş spektrum AB, immünoloji konsültasyonu</td>
              </tr>
            </tbody>
          </table>

          <h3>4. Kültür Pozitif Ama Klinik İyi</h3>

          <div className="highlight-box">
            <h4>Pozitif Kan Kültürü + Asemptomatik/Minimal Semptomatik Bebek</h4>
            <ul>
              <li><strong>Durum:</strong> İlk değerlendirmede iyi görünümlü, kan kültüründe üreme var</li>
              <li><strong>Ayırıcı tanı:</strong> Gerçek bakteriyemi mi? Kontaminasyon mu?</li>
              <li><strong>Kontaminasyon düşündürür:</strong>
                <ul>
                  <li>Koagülaz-negatif stafilokoklar (tek şişede)</li>
                  <li>Difteroid, Bacillus spp., Micrococcus</li>
                  <li>Tek kültür pozitif, tekrar negatif</li>
                  <li>Klinik hiç uyumlu değil</li>
                </ul>
              </li>
              <li><strong>Gerçek bakteriyemi düşündürür:</strong>
                <ul>
                  <li>Bilinen patojen (GBS, E. coli, S. pneumoniae)</li>
                  <li>Multiple kültür pozitif</li>
                  <li>Yüksek CFU sayısı</li>
                  <li>Klinik bulgular var (hafif de olsa)</li>
                </ul>
              </li>
              <li><strong>Yönetim:</strong> Şüphe varsa tam tedavi yap, tekrar kültür al, 24-48 saat gözlem</li>
            </ul>
          </div>

          <h3>5. Ateşle Birlikte Konvülziyon</h3>

          <div className="warning-box">
            <h4>Febril Konvülziyon vs Bakteriyel Meningit</h4>

            <div className="grid grid-2" style={{marginTop: '1rem'}}>
              <div>
                <p><strong>Basit Febril Konvülziyon Özellikleri:</strong></p>
                <ul>
                  <li>&gt;6 ay yaş (1-3 ayda nadirdir!)</li>
                  <li>Generalize tonik-klonik</li>
                  <li>&lt;15 dakika</li>
                  <li>24 saatte tek atak</li>
                  <li>Postiktal dönem kısa</li>
                  <li>Nörolojik muayene normal</li>
                </ul>
              </div>
              <div>
                <p><strong>Meningit/Ensefalit Düşündürür:</strong></p>
                <ul>
                  <li>&lt;6 ay yaş (ÖNEMLİ!)</li>
                  <li>Fokal konvülziyon</li>
                  <li>&gt;15 dakika veya status</li>
                  <li>Tekrarlayan ataklar</li>
                  <li>Uzamış postiktal dönem</li>
                  <li>Fontanel bombeleşmesi, ense sertliği</li>
                </ul>
              </div>
            </div>

            <p style={{marginTop: '1rem', color: '#f87171'}}><strong>Kritik:</strong> 1-3 aylık bebekte febril konvülziyon çok nadirdir. Bu yaş grubunda konvülziyon = meningit/ensefalit aksi kanıtlanana kadar. Mutlaka LP yapılmalı!</p>
          </div>

          <h3>6. Rekürren Ateş Atakları</h3>

          <div className="info-box">
            <h4>1-3 Ay İçinde Tekrarlayan Ateş</h4>
            <ul>
              <li><strong>Endişe:</strong> Altta yatan immün yetmezlik, anatomik anomali</li>
              <li><strong>Sık nedenler:</strong>
                <ul>
                  <li>Tekrarlayan viral enfeksiyonlar (en sık)</li>
                  <li>İdrar yolu anomalisi (VUR, obstrüksiyon)</li>
                  <li>Yetersiz tedavi edilmiş bakteriyel enfeksiyon</li>
                  <li>Nadir: Primer immün yetmezlik, otoinflamatuar hastalıklar</li>
                </ul>
              </li>
              <li><strong>Değerlendirme:</strong>
                <ul>
                  <li>Detaylı anamnez (aile öyküsü, tüm enfeksiyon öyküsü)</li>
                  <li>Tam fizik muayene (organomegali, dismorfik özellikler)</li>
                  <li>İmmünoglobulin seviyeleri (IgG, IgA, IgM)</li>
                  <li>Lenfosit alt tipleri</li>
                  <li>Renal-mesane ultrasonografi</li>
                  <li>İmmünoloji/Nefroloji konsültasyonu</li>
                </ul>
              </li>
            </ul>
          </div>

          <h3>7. Maternal Enfeksiyon Öyküsü</h3>

          <div className="success-box">
            <h4>Anne Doğum Sırasında Enfeksiyonluydu - Bebeğe Ne Yapmalı?</h4>

            <table style={{marginTop: '1rem'}}>
              <thead>
                <tr>
                  <th>Maternal Durum</th>
                  <th>Bebekte Yaklaşım</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Koryoamniyonit</strong></td>
                  <td>Tam sepsis iş-up (kan, BOS, idrar kültürü), empirik antibiyotik başla, ≥48 saat izlem</td>
                </tr>
                <tr>
                  <td><strong>GBS (+) ama intrapartum AB almış</strong></td>
                  <td>Bebek klinik değerlendirme, sınırlı iş-up (CBC, kan kültürü), gözlem 48 saat</td>
                </tr>
                <tr>
                  <td><strong>GBS (+) intrapartum AB YOK</strong></td>
                  <td>Tam sepsis iş-up, empirik antibiyotik, 48-72 saat izlem</td>
                </tr>
                <tr>
                  <td><strong>Maternal ateş (nedeni belirsiz)</strong></td>
                  <td>Bebek muayene, vital bulgular, klinik kötüyse iş-up ve antibiyotik</td>
                </tr>
                <tr>
                  <td><strong>Prolonge membran rüptürü (&gt;18 saat)</strong></td>
                  <td>Sınırlı iş-up, yakın gözlem, risk faktörü artarsa tam iş-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Slayt 15: Özet ve Önemli Noktalar */}
      <div className="slide">
        <div className="slide-header">
          <div className="slide-number">Slayt 15</div>
          <h2>Özet: Temel Mesajlar ve Klinik Pearls</h2>
        </div>
        <div className="content">
          <h3>🎯 10 Altın Kural</h3>

          <div className="highlight-box">
            <ol style={{fontSize: '1.05rem', lineHeight: '2'}}>
              <li><strong>1 ay altı her ateşli bebek = potansiyel İBE</strong> → Tam sepsis iş-up, yatış, antibiyotik</li>
              <li><strong>Lomber ponksiyon kritik</strong> → Meningit klinik olarak ayırt edilemeyebilir, ≤28 günde mutlaka yap</li>
              <li><strong>Ateş tek bulgu olabilir</strong> → Diğer semptomlar beklenilmez, ≥38°C yeterli endikasyon</li>
              <li><strong>Risk sınıflandırma sistemleri kullan</strong> → Rochester/Philadelphia/PECARN karar vermede yardımcı</li>
              <li><strong>Hızlı antibiyotik = hayat kurtarır</strong> → İBE şüphesinde 1 saat içinde başla</li>
              <li><strong>İdrar kültürü mutlaka al</strong> → İYE en sık İBE, torba ile değil kateterizasyonla</li>
              <li><strong>Kültür sonuçlarını bekle</strong> → 48-72 saat, tedaviyi daralt veya değiştir</li>
              <li><strong>Aile eğitimi önemli</strong> → Alarm belirtileri, takip planı, ilaç uyumu</li>
              <li><strong>Aşılama en iyi korunma</strong> → PCV13, Hib, GBS profilaksisi İBE'yi dramatik azalttı</li>
              <li><strong>Meningit geçirenleri izle</strong> → İşitme testi, nörolojik değerlendirme, gelişimsel takip</li>
            </ol>
          </div>

          <h3>📋 Hızlı Karar Algoritması</h3>

          <div className="warning-box">
            <h4>1-3 Aylık Ateşli Bebek Acile Geldi - Ne Yapmalı?</h4>

            <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px'}}>
              <p><strong>ADIM 1: Hemen Değerlendir</strong></p>
              <ul>
                <li>Vital bulgular (rektal ateş, kalp hızı, solunum, perfüzyon)</li>
                <li>Genel görünüm (toksik mi? letarjik mi? irritabl mi?)</li>
              </ul>
            </div>

            <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px'}}>
              <p><strong>ADIM 2: Toksik/Kötü Görünüm Var mı?</strong></p>
              <ul>
                <li><strong>EVET →</strong> Derhal tam sepsis iş-up (kan, idrar, BOS), IV antibiyotik başla, yatır</li>
                <li><strong>HAYIR →</strong> Adım 3'e geç</li>
              </ul>
            </div>

            <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px'}}>
              <p><strong>ADIM 3: Yaş?</strong></p>
              <ul>
                <li><strong>≤28 gün →</strong> Tam iş-up, LP, yatış, Ampisilin + Gentamisin/Sefotaksim</li>
                <li><strong>29-90 gün →</strong> Adım 4'e geç</li>
              </ul>
            </div>

            <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px'}}>
              <p><strong>ADIM 4: Laboratuvar (29-90 gün için)</strong></p>
              <ul>
                <li>CBC, CRP/PCT, kan kültürü, idrar analizi ve kültürü</li>
                <li>Viral testler (influenza, RSV, COVID-19)</li>
                <li>Lomber ponksiyon (klinik şüphe, yüksek risk, kötü lab)</li>
              </ul>
            </div>

            <div style={{marginTop: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '8px'}}>
              <p><strong>ADIM 5: Risk Sınıflandırma</strong></p>
              <ul>
                <li><strong>Yüksek Risk:</strong> Yatış + IV antibiyotik (Seftriakson ± Ampisilin)</li>
                <li><strong>Düşük Risk + Güvenilir Takip:</strong> IM Seftriakson + 24 saat içinde kontrol + taburcu</li>
              </ul>
            </div>
          </div>

          <h3>⚠️ Sık Yapılan Hatalar</h3>

          <div className="grid grid-2">
            <div className="card">
              <h4 style={{color: '#f87171'}}>❌ Yapma</h4>
              <ul>
                <li>Aksiller ateş ölçümüne güvenme (rektal ölç)</li>
                <li>Sadece toksik görünümlülere iş-up yapma</li>
                <li>Torba idrar kültürü ile karar verme</li>
                <li>Viral test pozitifse bakteriyel tamamen ekarte etme</li>
                <li>Kültür sonuçlarını beklemeden taburcu etme</li>
                <li>≤28 günlükte seftriakson verme (bilirubin)</li>
                <li>LP'yi sadece klinik bulgulara göre atlama</li>
                <li>Aileye alarm belirtilerini söylemeden gönderme</li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{color: '#4ade80'}}>✅ Yap</h4>
              <ul>
                <li>Her ateşli bebeğe sistematik yaklaş</li>
                <li>Risk skorlarını kullan ama klinik sezgini dinle</li>
                <li>İdrar kültürünü kateterizasyonla al</li>
                <li>≤28 günde mutlaka LP yap</li>
                <li>Antibiyotiği hızlı başla (İBE şüphesinde &lt;1 saat)</li>
                <li>Kültür sonuçlarına göre tedaviyi daralt</li>
                <li>Aile eğitimi ve yazılı talimatlar ver</li>
                <li>Kesin takip planı yap</li>
              </ul>
            </div>
          </div>

          <h3>📚 Kaynaklar ve İleri Okuma</h3>

          <div className="info-box">
            <h4>Temel Referanslar</h4>
            <ul>
              <li>American Academy of Pediatrics - Febrile Infant Guidelines (2021)</li>
              <li>PECARN Febrile Infant Working Group Studies</li>
              <li>Dagan R et al. Identification of infants unlikely to have serious bacterial infection. Pediatrics</li>
              <li>Gomez B et al. Validation of the "Step-by-Step" Approach. Pediatrics 2016</li>
              <li>Hui C et al. Diagnosis and Management of Febrile Infants. JAMA Pediatrics</li>
              <li>Kuppermann N et al. Risk Stratification in Febrile Infants. NEJM Pediatrics</li>
            </ul>
          </div>

          <h3>🎓 Konuşmanın Temel Mesajları</h3>

          <div className="success-box">
            <p style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#60a5fa'}}><strong>Sunumdan çıkarılacak ana noktalar:</strong></p>
            <ul style={{fontSize: '1.05rem'}}>
              <li><strong>1-3 aylık bebekler yüksek risk grubu</strong> - İBE prevalansı %3-10, ciddi sekeller gelişebilir</li>
              <li><strong>Erken tanı ve tedavi kritik</strong> - Hızlı antibiyotik mortalite ve morbiditeyi azaltır</li>
              <li><strong>Risk sınıflandırma sistemleri yardımcı</strong> - Klinik karar vermeyi standardize eder</li>
              <li><strong>Aşılama programları etkili</strong> - PCV13, Hib, GBS profilaksisi İBE insidansını dramatik azalttı</li>
              <li><strong>Takip ve aile eğitimi önemli</strong> - Alarm belirtileri, düzenli kontroller, uyum kritik</li>
              <li><strong>Güncel tartışmalar devam ediyor</strong> - LP endikasyonları, viral testlerin rolü, ayaktan tedavi</li>
            </ul>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', border: '2px solid #3b82f6'}}>
            <h3 style={{color: '#60a5fa', marginBottom: '1rem'}}>Teşekkürler!</h3>
            <p style={{fontSize: '1.1rem', color: '#cbd5e1'}}>Sorularınız için...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
