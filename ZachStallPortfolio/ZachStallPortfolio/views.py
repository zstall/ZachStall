from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'ZSP/index.html'

class AboutMePage(TemplateView):
    template_name = 'ZSP/about_me.html'

class PcBuildsPage(TemplateView):
    template_name = 'ZSP/pc_builds.html'

class LeelaPage(TemplateView):
    template_name = 'ZSP/leela.html'
