<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Legal Summit Law Firm Sitemap</title>
        <style>
          body {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            background: #f4efe8;
            color: #1f1b16;
          }

          .wrap {
            max-width: 960px;
            margin: 0 auto;
            padding: 48px 24px 72px;
          }

          h1 {
            margin: 0 0 12px;
            font-size: 2.5rem;
            line-height: 1.1;
          }

          p {
            margin: 0 0 24px;
            color: #5f5243;
            font-size: 1rem;
          }

          .card {
            overflow: hidden;
            border: 1px solid #dccdbb;
            border-radius: 20px;
            background: #fffdf9;
            box-shadow: 0 18px 40px rgba(58, 41, 25, 0.08);
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th,
          td {
            padding: 16px 18px;
            text-align: left;
            border-bottom: 1px solid #efe5d8;
            vertical-align: top;
          }

          th {
            background: #2f2419;
            color: #f8f2ea;
            font-size: 0.85rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          tr:last-child td {
            border-bottom: 0;
          }

          td {
            font-size: 0.98rem;
          }

          a {
            color: #8a4b18;
            text-decoration: none;
            word-break: break-all;
          }

          a:hover {
            text-decoration: underline;
          }

          @media (max-width: 720px) {
            .wrap {
              padding: 32px 16px 48px;
            }

            h1 {
              font-size: 2rem;
            }

            th,
            td {
              padding: 12px 14px;
              font-size: 0.92rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <p>Generated for Legal Summit Law Firm. Search engines can read the XML, and browsers can view it as a styled table.</p>
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a>
                        <xsl:attribute name="href">
                          <xsl:value-of select="sitemap:loc" />
                        </xsl:attribute>
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod" /></td>
                    <td><xsl:value-of select="sitemap:changefreq" /></td>
                    <td><xsl:value-of select="sitemap:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
