import { loadCSS } from '../../scripts/aem.js';

const searchBody = `
<atomic-search-interface fields-to-include='["snrating", "sncost", "pagetype", "contenttype", "title", "description"]' pipeline="Aldevron Marketplace" search-hub="AldevronMainSearch"> 
<atomic-search-layout>
  <atomic-layout-section section='search'>
    <atomic-search-box></atomic-search-box>
  </atomic-layout-section>
  <atomic-layout-section section='facets'>
    <atomic-facet-manager>
      <atomic-facet field='contenttype' label='Content Type'></atomic-facet>
      <atomic-facet field='pagetype' label='Page Type'></atomic-facet>
    </atomic-facet-manager>
  </atomic-layout-section>
  <atomic-layout-section section='main'>
    <atomic-layout-section section="status">
      <atomic-breadbox></atomic-breadbox>
      <atomic-query-summary></atomic-query-summary>
      <atomic-refine-toggle></atomic-refine-toggle>
      <atomic-sort-dropdown>
        <atomic-sort-expression
          label="relevance"
          expression="relevancy"
        ></atomic-sort-expression>
        <atomic-sort-expression
          label="Title"
          expression="title ascending"
        ></atomic-sort-expression>
      </atomic-sort-dropdown>
      <atomic-did-you-mean></atomic-did-you-mean>
      <atomic-notifications></atomic-notifications>
    </atomic-layout-section>
    <atomic-layout-section section='results'>
      <atomic-result-list>
        <atomic-result-template>
          <template>
            <style> 
              @media (min-width: 1024px) {
                .badge{
                    margin-left: 0.75rem;
                    margin-bottom: 0.75rem !important;
                }
              }

              .description-excerpt{
                margin-top: 0.5rem !important;
              }

              .display-list {
                position: relative;
                padding-right: 125px;
              }

              @media (max-width: 768px) { 
                  .display-list {
                    position: relative;
                    padding-bottom: 60px;
                    padding-right: 0px;
                }
              }
              @media (max-width: 540px) { 
                  .display-list {
                    position: relative;
                    padding-bottom: 60px;
                    padding-right: 0px;
                }
              }
              @media (max-width: 786px) { 
                  .btn-right-view {
                    position: absolute;
                    bottom: 0%;
                    left: 0;
                }
              }
              .btn-right-view {
                  position: absolute;
                  right: 0%;
              }

              @media (min-width: 1024px) { 
                .btn-right-view {
                  margin-top: 42px;
                }
              }

              .btn-right-view .button{
                background-color: #ec8f2d;
                border-radius: 5px !important;
                border: 1px solid #ec8f2d;
                box-sizing: border-box;
                color: #fff;
                cursor: pointer;
                display: inline-block;
                font-family: Brown-Ald, Helvetica, Arial, sans-serif;
                font-size: 18px !important;
                font-weight: 400;
                line-height: 100%;
                margin: 0;
                padding: .6em 1.3em;
                text-align: center;
                text-decoration: none;
                transition: background .3s;
                vertical-align: middle;
                width: 7rem;
              }

              .btn-atomic-link {
                width: 7rem;
                padding: .5rem 0;
                border-radius: .375rem;
                font-weight: 600;
              }

              .search-title {
                width: 100%;
                display: block;
                padding: 0;
                margin-bottom: .5rem;
                font-size: 1.5rem;
                font-weight: 600;
              }

              .description {
                color: #333;
                font-size: .875;
                font-weight: 400;
              }

              .field {
                display: inline-flex;
                align-items: center;
              }

              .field-label {
                font-weight: bold;
                margin-right: 0.25rem;
              }

              .thumbnail {
                display: none;
                width: 100%;
                height: 100%;
              }

              .icon {
                display: none;
              }

              .result-root.image-small .thumbnail,
              .result-root.image-large .thumbnail {
                display: inline-block;
              }

              .result-root.image-icon .icon {
                display: inline-block;
              }

              atomic-result-badge::part(result-badge-element) {
                background: #E0E9EB;
                padding: .25rem .375rem;
                border-radius: 5px;
                margin-top: .25rem;
                color: black;
                height: auto !important;
               }

            </style>
            <atomic-result-section-title 
              ><atomic-result-link class='search-title'></atomic-result-link
            ></atomic-result-section-title>
            <atomic-result-section-excerpt class='description-excerpt'
              ><atomic-result-text field='excerpt' class='description'></atomic-result-text
            ></atomic-result-section-excerpt>           
            <atomic-result-section-badges class="badge">
                <atomic-field-condition if-defined="contenttype" class="hydrated">
                    <atomic-result-badge class="hydrated" field="contenttype"></atomic-result-badge>
                </atomic-field-condition>  
                <atomic-field-condition if-defined="pagetype" class="hydrated">
                    <atomic-result-badge class="hydrated" field="pagetype"></atomic-result-badge>
                </atomic-field-condition>  
            </atomic-result-section-badges>
            <atomic-result-link data-atomic-rendered="true" data-atomic-loaded="true" class="btn-right-view hydrated">
                 <button class="btn-atomic-link button">View</button>
            </atomic-result-link>
          </template>
        </atomic-result-template>
      </atomic-result-list>
      <atomic-query-error></atomic-query-error>
      <atomic-no-results></atomic-no-results>
    </atomic-layout-section>
    <atomic-layout-section section="pagination" class="atomic-pagination">
        <atomic-pager></atomic-pager>
    </atomic-layout-section>
  </atomic-layout-section>
</atomic-search-layout>
</atomic-search-interface>
`;

export default async function decorate(block) {
  loadCSS('https://static.cloud.coveo.com/atomic/v2/themes/coveo.css');

  (async () => {
    await import('https://static.cloud.coveo.com/atomic/v2/atomic.esm.js');// eslint-disable-line
    await customElements.whenDefined('atomic-search-interface');

    const searchInterface = document.querySelector('atomic-search-interface');
    // Initialization
    await searchInterface.initialize({
      accessToken: window.aldevronConfig?.searchKey,
      organizationId: window.aldevronConfig?.searchOrg,
      organizationEndpoints: await searchInterface
        .getOrganizationEndpoints(window.aldevronConfig.searchOrg),
    });
    // Trigger a first search
    searchInterface.executeFirstSearch();
  })();
  block.innerHTML = searchBody;
}
