import type { SearchResultTemplate } from "@searchcraft/javascript-sdk";

/**
 * This type represents your index schema.
 *
 * Update this type definition to match your schema as defined in Vektron.
 */
type ExampleSearchResultTemplateIndexSchema = {
	canonical_link: string;
	section_name: string;
	headline: string;
	body: string;
	date_published: string;
	author_name: string;
	medium_image: string;
};

/**
 * The templating function used to render a search result item.
 *
 * Documentation: https://docs.searchcraft.io/sdks/javascript/working-with-templates/
 */
export const ExampleSearchResultTemplate: SearchResultTemplate<
	ExampleSearchResultTemplateIndexSchema
> = (data, index, { html }) => html`
  <a href="${data.canonical_link}" target="_blank" rel="noreferrer">
    <div class="search-result-content">
      <h3 class="search-result-content-subtitle">${data.section_name}</h3>
      <h2 class="search-result-content-title">${data.headline}</h2>
      <p class="search-result-content-body">${data.body}</p>
      <footer class="search-result-content-footer">
        <time>
          ${new Intl.DateTimeFormat("en-US", {
						day: "numeric",
						month: "short",
						year: "numeric",
					}).format(new Date(data.date_published))}
        </time>
        •
        <p>${data.author_name}</p>
      </footer>
    </div>
    <div class="search-result-image">
      <img src="${data.medium_image}" alt="${data.headline}" />
    </div>
  </a>
`;
