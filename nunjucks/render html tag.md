# how to render html tag

使用autoescaping  
If autoescaping is turned on in the environment, all output will automatically be escaped for safe output. To manually mark output as safe, use the safe filter. Nunjucks will not escape this output.

开启autoescaping后,所有的输出会自动转义以获得安全输出.但是nunjucks模板不会自动转义输出,需要手动开启,开启方式:
```
{{ foo }}           // &lt;span%gt;
{{ foo | safe }}    // <span>
```