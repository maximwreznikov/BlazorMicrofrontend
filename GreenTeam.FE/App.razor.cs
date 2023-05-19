﻿using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreenTeam.FE
{
    public partial class App
    {
        [Inject]
        IJSRuntime Jsr { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await Jsr.InvokeVoidAsync("renderLSApp");
            await base.OnAfterRenderAsync(firstRender);

        }
    }
}