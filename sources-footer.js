(()=> {
  const groups = [
    {name:'Normativa', docs:[
      'IECM-ACU-CG-065-2026.pdf',
      'IECM-ACU-CG-065-2026_ANEXO.pdf',
      'Lineamientos.pdf',
      '06_Convocatoria INE.pdf',
      '06_Convocatoria_OPL.pdf',
      'Acuerdo INE 548.pdf',
      'INE Plan Integral PEC 26-27..pdf',
      'INE Calendarios de Coordinación 2026-2027.xlsx',
      'INE_Plan Integral y Calendario del Proceso Electoral Federal 2026-2027.pdf',
      'Reglamento Consejos Distritales (GOCDMX-13-11-2023).pdf',
      'Reglamento de Fiscalización.pdf',
      'Reglamento para el Registro de Partidos Políticos Locales.pdf',
      'Reglamento de Elecciones.pdf',
      'Convocatoria para participar en el Proceso Electoral 2026 - 2027.pdf',
      'Ley General del Partidos Políticos.pdf',
      'Constitución Política de los Estados Unidos Mexicanos.pdf',
      'Constitución Política de la Ciudad de México.pdf',
      'Código de Instituciones y Procedimiento Electorales de la CDMX.pdf'
    ]},
    {name:'Organización Electoral', docs:[
      'INE-CG469-2026 Anexo.pdf',
      'INE-CG469-2026.pdf',
      'IECM-ACU-CG-057-2026.pdf'
    ]},
    {name:'Cómputos', docs:[
      'IECM-ACU-CG-055-2026.pdf',
      'IECM-ACU-CG-056-2026.pdf'
    ]},
    {name:'Asociaciones Políticas y Candidaturas', docs:[
      'IECM-ACU-CG-058-2026.pdf',
      'IECM-ACU-CG-058-2026_ANEXO.pdf',
      'IECM-ACU-CG-054-2026.pdf',
      'IECM-ACU-CG-048-2026.pdf',
      'IECM-ACU-CG-051-2026.pdf'
    ]},
    {name:'Financiamiento y Fiscalización', docs:[
      'IECM-ACU-CG-066-2026.pdf',
      'IECM-ACU-CG-047-2026.pdf'
    ]}
  ];

  function boot(){
    if(document.querySelector('.sources-panel')) return;
    const wrap=document.querySelector('.wrap')||document.body;
    const oldFooter=wrap.querySelector('.page-footer');
    const total=groups.reduce((n,g)=>n+g.docs.length,0);
    const details=document.createElement('details');
    details.className='sources-panel';
    details.innerHTML=`
      <summary>
        <span>Fuentes consultadas · Inventario documental del proyecto</span>
        <span>${total} documentos</span>
      </summary>
      <div class="sources-body">
        <p class="sources-intro">
          Inventario consolidado del acervo documental vigente del proyecto con corte al
          <span class="source-cut">01/10/2026</span>. El listado se verificó directamente contra
          las cinco carpetas temáticas de Google Drive. Los documentos incorporados el 1 de octubre
          —IECM-ACU-CG-065-2026, su Anexo e IECM-ACU-CG-066-2026— ya forman parte del acervo consolidado.
          Las cinco subcarpetas “Para actualizar” fueron revisadas y se encuentran sin documentos pendientes.
        </p>
        <div class="source-grid">
          ${groups.map(g=>`
            <section class="source-group">
              <h3>${g.name} · ${g.docs.length} documento${g.docs.length===1?'':'s'}</h3>
              <ul>${g.docs.map(d=>`<li>${d}</li>`).join('')}</ul>
              <div class="source-empty">Para actualizar: vacía al corte del 01/10/2026</div>
            </section>
          `).join('')}
        </div>
        <div class="source-total">
          <strong>Total inventariado y verificado: ${total} documentos fuente.</strong>
          Distribución: Normativa 18 · Organización Electoral 3 · Cómputos 2 ·
          Asociaciones Políticas y Candidaturas 5 · Financiamiento y Fiscalización 2.
          Este inventario, sus contadores y la relación de fuentes deberán sincronizarse
          cada vez que cambie el acervo del proyecto.
        </div>
      </div>`;
    if(oldFooter) wrap.insertBefore(details,oldFooter);
    else wrap.appendChild(details);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();