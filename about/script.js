(async () => {
  const data = await (await fetch("/about/text/how-built.txt")).text();

  console.log(data);

  about_contents = [
    ["How I made this", "/about/text/how-built.txt"],
    ["Goal", "/about/text/goal.txt"],
    ["License", "/about/text/license.txt"],
    ["Sources/Credit", "/about/text/sources.txt"],
  ];

  for (i = 0; i < about_contents.length; i++) {
    // make the section h2 element
    section_element = document.createElement("h1");
    section_element.className = "section";
    section_element.innerHTML = about_contents[i][0];
    document.body.appendChild(section_element);

    // make the p element
    section_text_element = document.createElement("p");
    section_text_element.className = "section-text";
    section_text_element.innerHTML = await (
      await fetch(about_contents[i][1])
    ).text();
    document.body.appendChild(section_text_element);
    console.log(i);
  }
})();
