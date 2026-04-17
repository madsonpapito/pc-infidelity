-- Dados iniciais - Cursos
INSERT INTO courses (title, description, category, order_index) VALUES
('Comece Aqui', 'Aprenda as diferenças entre o scanner e o TiSpy, e como TiSpy oferece acesso 100% ao telemóvel', 'introduction', 1),
('Tutorial de Instalação', 'Guia passo a passo para instalar TiSpy no telemóvel alvo com dicas práticas', 'installation', 2),
('Painel Avançado', 'Domine todas as funcionalidades do painel de monitoramento TiSpy', 'advanced', 3),
('Ferramentas Bónus', 'Acesso a scanners de redes sociais como recursos adicionais', 'bonus', 4);

-- Dados iniciais - Aulas para "Comece Aqui"
INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Introdução ao TiSpy e Diferenças com o Scanner', 'Nesta aula você aprenderá as limitações do scanner tradicional e como o TiSpy oferece uma solução completa com acesso 100% ao telemóvel alvo.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 1, 15
FROM courses WHERE category = 'introduction'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'O Que é Espionagem Avançada?', 'Entenda como funciona a espionagem digital avançada e por que o TiSpy é a solução mais confiável do mercado.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 2, 12
FROM courses WHERE category = 'introduction'
LIMIT 1;

-- Dados iniciais - Aulas para "Tutorial de Instalação"
INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Preparação e Primeiros Passos', 'Aprenda como preparar o telemóvel e os primeiros passos para instalar o TiSpy com segurança.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 1, 18
FROM courses WHERE category = 'installation'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Instalação Passo a Passo', 'Guia detalhado com screenshots mostrando cada passo da instalação do TiSpy no telemóvel alvo.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 2, 20
FROM courses WHERE category = 'installation'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Dicas Práticas de Instalação', 'Dicas importantes: instale primeiro no seu próprio telemóvel para aprender, ou ofereça um telemóvel novo como presente.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 3, 10
FROM courses WHERE category = 'installation'
LIMIT 1;

-- Dados iniciais - Aulas para "Painel Avançado"
INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Visão Geral do Painel de Controle', 'Conheça a interface completa do painel de monitoramento TiSpy e suas principais funcionalidades.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 1, 15
FROM courses WHERE category = 'advanced'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Monitoramento de Mensagens', 'Aprenda a monitorar todas as mensagens, conversas privadas e grupos do telemóvel alvo.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 2, 18
FROM courses WHERE category = 'advanced'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Rastreamento de Localização', 'Saiba como rastrear a localização em tempo real do telemóvel alvo com precisão GPS.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 3, 16
FROM courses WHERE category = 'advanced'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Monitoramento de Redes Sociais', 'Monitore todas as atividades em redes sociais, mensagens privadas e chamadas de vídeo.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 4, 17
FROM courses WHERE category = 'advanced'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Gravação de Chamadas e Áudio', 'Aprenda a gravar chamadas, áudio ambiente e conversas do telemóvel alvo.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 5, 14
FROM courses WHERE category = 'advanced'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Modo Stealth e Privacidade', 'Entenda como o TiSpy funciona em modo stealth 100% invisível sem deixar rastros.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 6, 13
FROM courses WHERE category = 'advanced'
LIMIT 1;

-- Dados iniciais - Aulas para "Ferramentas Bónus"
INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Scanner de Instagram', 'Aprenda a usar o scanner de Instagram para analisar perfis públicos e dados de engajamento.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 1, 10
FROM courses WHERE category = 'bonus'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Scanner de WhatsApp', 'Saiba como usar o scanner de WhatsApp para obter informações de perfis públicos.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 2, 8
FROM courses WHERE category = 'bonus'
LIMIT 1;

INSERT INTO lessons (course_id, title, description, video_url, video_type, order_index, duration_minutes)
SELECT id, 'Scanner de Apps de Encontros', 'Descubra como usar o scanner para analisar perfis em aplicações de encontros.', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'youtube', 3, 9
FROM courses WHERE category = 'bonus'
LIMIT 1;
